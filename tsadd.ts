import { Handler } from "aws-lambda";
// import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";
import * as uuidv4 from "uuid/v4";

export const tsAddUs: Handler = async (event, _context) => {
  console.log("async event:", JSON.stringify(event, null, 2));

  try {
    let objectInput: {
      operation: string;
      input: { operand1: number; operand2: number };
    } = event;
    console.log(objectInput);
    console.log(objectInput.input.operand1);

    const operationA = objectInput.operation;
    let N1 = objectInput.input.operand1;
    let N2 = objectInput.input.operand2;

    if (!objectInput.input.operand1 || !objectInput.input.operand2) {
      throw new Error("Can NOT destructure event.body object!");
    }

    let result: number;
    switch (operationA) {
      case "add":
        // code
        result = N1 + N2;
        break;
      case "sub":
        // code
        result = N1 - N2;
        break;
      case "multiply":
        // code
        result = N1 * N2;
        break;
      case "devide":
        // code
        result = N1 / N2;
        break;

      default:
        // code
        result = null;
    }

    // let output = {
    //   inputNo1: objectInput.input.operand1,
    //   inputNo2: objectInput.input.operand2,
    //   result: objectInput.input.operand1 + objectInput.input.operand1,
    // };

    return {
      statusCode: 200,
      body: result,
      uuidTest: uuidv4(),
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: `Error: ${e.message}, ${uuidv4()}`,
    };
  }
};
