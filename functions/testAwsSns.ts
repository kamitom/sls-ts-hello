import * as AWS from 'aws-sdk'
import { APIGatewayProxyHandler } from 'aws-lambda'

export const handleSNS: APIGatewayProxyHandler = async (event, _context) => {
    console.log('Send SNS event: ', JSON.stringify(event, null, 2))

    // Create publish parameters
    var params = {
        Message:
            '天皇陛下にトランプ氏「最初の国賓、光栄です」- V9' /* required */,
        PhoneNumber: '+886971088033',
    }

    // Create promise and SNS service object
    var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' })
        .publish(params)
        .promise()

    // Handle promise's fulfilled/rejected states
    publishTextPromise
        .then(function(data) {
            console.log('MessageID is ' + data.MessageId)
        })
        .catch(function(err) {
            console.error(err, err.stack)
        })

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Feature: hello AWS SNS.',
                input: params,
                // input: event,
            },
            null,
            2
        ),
    }
}
