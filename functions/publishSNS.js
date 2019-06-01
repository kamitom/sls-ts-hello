'use strict';

const AWS = require('aws-sdk');
const sns = new AWS.SNS()


module.exports.publishSnsTest = (event, context, callback) => {

  let eventObj = JSON.parse(event.body);
  let {
    receiver,
    // sender,
    message
  } = eventObj


  let isPromotional = true;

  console.log("Sending message", message, "to receiver", receiver);

  sns.publish({
      Message: message,
      MessageAttributes: {
        'AWS.SNS.SMS.SMSType': {
          DataType: 'String',
          StringValue: 'Promotional'
        },
        // 'AWS.SNS.SMS.SenderID': {
        //   DataType: 'String',
        //   StringValue: sender
        // },
      },
      PhoneNumber: receiver
    }).promise()
    .then(data => {
      console.log("Sent message to", receiver);
      callback(null, data);
    })
    .catch(err => {
      console.log("Sending failed", err);
      callback(err);
    });

}