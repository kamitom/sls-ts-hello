import { Handler } from "aws-lambda";
import * as uuidv4 from "uuid/v4";
import * as im from "imagemagick";
import * as fs from "fs";
import * as os from "os";
import { promisify } from "util";
import * as AWS from "aws-sdk";

const resizeAsync = promisify(im.resize);
const readFileAsync = promisify(fs.readFile);
const unlinkAsync = promisify(fs.unlink);

const s3 = new AWS.S3();

export const handlerS3: Handler = async (event, _context) => {
  console.log("async event:", JSON.stringify(event, null, 2));

  console.log("context info: ", _context);

  try {
    let filesProcessed = event.Records.map(async record => {
      let bucket = record.s3.bucket.name;
      let filename = record.s3.object.key;

      // Get file from S3
      var params = {
        Bucket: bucket,
        Key: filename,
      };
      console.log("params: get file from S3: ", params);

      let inputData = await s3.getObject(params).promise();

      // Resize the file
      let tempFile = os.tmpdir() + "/" + uuidv4() + ".png";
      let resizeArgs = {
        srcData: inputData.Body,
        dstPath: tempFile,
        width: 150,
      };
      await resizeAsync(resizeArgs);

      // Read the resized file
      let resizedData = await readFileAsync(tempFile);

      // Upload the new file to s3
      let targetFilename =
        filename.substring(0, filename.lastIndexOf(".")) + "-small.png";
      var params2 = {
        Bucket: bucket + "-dest",
        Key: targetFilename,
        Body: new Buffer(resizedData),
        ContentType: "image/png",
      };
      console.log("new s3 bucket: ", params2);

      await s3.putObject(params2).promise();
      return await unlinkAsync(tempFile);
    });

    await Promise.all(filesProcessed);
    console.log("uploaded PNG!");
    // return "uploaded!!";

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: event,
      uuidTest: uuidv4(),
    };
  } catch (e) {
    console.log("Error is: ", e.stack);
    return {
      statusCode: 400,
      msg: "Error: " + e.message,
    };
  }
};
