const nodemailer = require('nodemailer');

const emailUser = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPassword
  }
});

var mailOptions = {
  from: 'notesapp001@gmail.com',
  to: 'dummy@dummy.com',
  subject: 'Welcome to Notes App!',
  text: 'Thanks for registering with Notes App. You can now log in and start creating notes.'
};

const sendWelcomeMail = (address) => {
  mailOptions.to = address;
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Welcome email sent: ' + info.response);
    }
  });
};

const sendResetMail = (address, token) => {
  mailOptions.to = address;
  mailOptions.subject = 'Password Reset Request';
  mailOptions.text = 'You can reset using: http://localhost:3000/reset?token=' + token;
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Reset email sent: ' + info.response);
    }
  });
};

exports.sendResetMail = sendResetMail;
exports.sendWelcomeMail = sendWelcomeMail;
