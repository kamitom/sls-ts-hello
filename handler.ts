import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
// import * as _ from 'lodash'
const _ = require('lodash')

export const helloTsFunc: APIGatewayProxyHandler = async (event, _context) => {
    let lotest: [] = _.range(1911, 2019)
    let testVersion: string = 'v1.5'
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Test: import lodash issue!',
                input: event.body,
                lodashTest: lotest.length,
                theVer: testVersion,
            },
            null,
            2
        ),
    }
}
