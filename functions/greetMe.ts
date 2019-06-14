import { APIGatewayProxyHandler } from "aws-lambda";

const moment = require("moment");
const greeting = {
  en: "Hello",
  fr: "Bonjour",
  hi: "Namaste",
  es: "Hola",
  pt: "Olá",
  ur: "Assalamo aleikum",
  it: "Ciao",
  de: "Hallo",
  tw: "你好",
};

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  console.log("raise an evnet: ", event);
  console.log("context info: ", _context);

  let name = event.pathParameters.name;
  //let {lang, ...info} = event.queryStringParameters || {};
  let { lang, ...info } = event.queryStringParameters;

  let message = `${greeting[lang] ? greeting[lang] : greeting["en"]} ${name}`;
  let response = {
    message: message,
    info: info,
    timestamp: moment().unix(),
    ctxInfo: _context,
  };

  console.log("Msg:", response);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(response),
  };
};
