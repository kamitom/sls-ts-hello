"use strict";

module.exports.addus = async (event) => {
  console.log("hi :", event);
  // TODO implement
  try {


    let {
      operand1,
      operand2
    } = event.input;

    if (!operand1 || !operand2) {
      throw new Error("operand can not destructure.");
    }

    let result;
    switch (event.operation) {
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

  } catch (e) {

    return {
      statusCode: 400,
      body: `Error: ${e.message}`
    };
  }



  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};