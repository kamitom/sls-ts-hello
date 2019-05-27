import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'

export const tsAddUs: APIGatewayProxyHandler = async (event, _context) => {
    let { number1, number2 } = JSON.parse(event.body)

    let output = {
        inputNo1: number1,
        inputNo2: number2,
        result: number1 + number2,
    }

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                output: output,
                message: 'Go jsadd.js to tsadd.ts test here!',
                input: event.body,
            },
            null,
            2
        ),
    }
}
