var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = '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';


async function sendWelcomeEmail(email,_name){

  let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()

  sendSmtpEmail = {
    'subject':'Thanks for joining in!',
    'sender' : {'email':'nadirshaaliyar737@gmail.com', 'name':'Sendinblue'},
    'to' : [{'name': (_name), 'email':email}],
    'htmlContent' : '<html><body><h1>Welcome to the app {{params.bodyMessage}}</h1></body></html>',
    'params' : {'bodyMessage':_name}

  }
  apiInstance.sendTransacEmail(sendSmtpEmail)
  // .then(function(data) {
  //   console.log(data);
  // }, function(error) {
  //   console.error(error);
  // });

 }

//  sendWelcomeEmail('nadirshaaliyar747@gmail.com','nadir')

async function sendCancelationEmail(email,_name){

  let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()

  sendSmtpEmail = {
    'subject':'Sorry to see you go!',
    'sender' : {'email':'nadirshaaliyar737@gmail.com', 'name':'Sendinblue'},
    'to' : [{'name': (_name), 'email':email}],
    'htmlContent' : '<html><body><h1>Goodbye,{{params.bodyMessage}}.I hope to see you back sometime soon!</h1></body></html>',
    'params' : {'bodyMessage':_name}

  }
  apiInstance.sendTransacEmail(sendSmtpEmail)
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}