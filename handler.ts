import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";
// import * as _ from 'lodash'
const _ = require("lodash");
import * as uuidv4 from "uuid/v4";

export const helloTsFunc: APIGatewayProxyHandler = async (event, _context) => {
  let lotest: [] = _.range(1911, 2019);
  let testVersion: string = "v1.6-" + uuidv4();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Test: hello Cognito API ?!",
        input: event,
        lodashTest: lotest.length,
        theVer: testVersion,
      },
      null,
      2
    ),
  };
};
