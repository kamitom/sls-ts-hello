// import { APIGatewayProxyHandler } from "aws-lambda";
import { Handler } from "aws-lambda";

export const calcHandler: Handler = async (event, _ctx) => {
  console.log("hello log: !!");

  console.log("hi :", event.input);
  // TODO implement
  let { operand1, operand2 } = event.input;
  let result;
  switch (event.methodIs) {
    case "add":
      // code
      result = operand1 + operand2;
      break;
    case "sub":
      // code
      result = operand1 - operand2;
      break;
    case "multiply":
      // code
      result = operand1 * operand2;
      break;
    case "devide":
      // code
      result = operand1 / operand2;
      break;

    default:
      // code
      result = null;
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify(result),
  };
  return response;
};
