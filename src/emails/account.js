var SibApiV3Sdk = require('sib-api-v3-sdk');
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = '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';


new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
  {
    'subject':'Hello from the Node SDK!',
    'sender' : {'email':'nadirshaaliyar737@gmail.com', 'name':'Sendinblue'},
    'replyTo' : {'email':'api@sendinblue.com', 'name':'Sendinblue'},
    'to' : [{'name': 'John Doe', 'email':'nadirshaaliyar747@gmail.com'}],
    'htmlContent' : '<html><body><h1>This is a transactional email {{params.bodyMessage}}</h1></body></html>',
    'params' : {'bodyMessage':'Made just for you!'}
  }
).then(function(data) {
  console.log(data);
}, function(error) {
  console.error(error);
});