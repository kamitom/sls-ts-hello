import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
// import * as _ from 'lodash'
const _ = require('lodash')

// import foo from './foo'
// import { showmeLengh } from './foo'
import * as foo2 from './foo'

export const helloTsFunc: APIGatewayProxyHandler = async (event, _context) => {
    let lotest: [] = _.range(1911, 2019)
    let testVersion: string = 'v1.5'
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Test: hello Cognito API ?!',
                input: event,
                theVer: testVersion,
                lodashTest: lotest.length,
                theFoo: foo2.default.foo2,
                fooExport: 'String Contents: ' + foo2.showJpLanguageLength,
            },
            null,
            2
        ),
    }
}
