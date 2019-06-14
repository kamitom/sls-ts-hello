import { Handler } from "aws-lambda";
import * as uuidv4 from "uuid/v4";

export const handlerS3: Handler = async event => {
  console.log("async event:", JSON.stringify(event, null, 2));

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: "hello, S3 upload files. uuid: " + uuidv4(),
  };
};
