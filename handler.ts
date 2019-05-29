import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
// import * as _ from 'lodash'
const _ = require('lodash')
import { v4 as uuid } from 'uuid'

export const helloTsFunc: APIGatewayProxyHandler = async (event, _context) => {
    let lotest: [] = _.range(1911, 2019)
    let testVersion: string = 'v1.6-' + uuid()
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Test: hello Cognito API ?!',
                input: event,
                lodashTest: lotest.length,
                theVer: testVersion,
            },
            null,
            2
        ),
    }
}
