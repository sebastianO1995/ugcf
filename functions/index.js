const functions = require('firebase-functions');
const nodemailer = require("nodemailer");
const cors = require('cors')({origin: true});

const gmailEmail = functions.config().gmail.login;
const gmailPassword = functions.config().gmail.pass;

let mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

exports.sendEmail = functions.https.onRequest((req, res) => {

  console.log('Method: ' + req.method);
  console.log('Data: '+ req.body.to + ' ' + req.body.from + ' ' + req.body.content);

  cors(req, res, () => {
    sending(req.body);
  })
})

function sending(body){
  const mailOptions = {
    from: gmailEmail,
    to: body.to,
    subject: body.subject,
    html: `<p>${body.content}</p>`
  };

  return mailTransport.sendMail(mailOptions, function(err,data){
    if(err){
      console.log('Error: ' + err)
    } else {
      console.log('Sent: %s', info.messageId);
    }
  });
}
