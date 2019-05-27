import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
// import _ from 'lodash'
const _ = require('lodash')

export const helloTsFunc: APIGatewayProxyHandler = async (event, _context) => {
    let lotest: [] = _.range(1911, 2019)

    let test1: string = "100"

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message:
                    'Test: lodash, Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
                input: event,
                lodashTest: lotest,
            },
            null,
            2
        ),
    }
}
