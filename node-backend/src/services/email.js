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
  subject: '',
  html: ''
};

const sendWelcomeMail = (address, user) => {
  mailOptions.to = address;
  mailOptions.subject = 'Welcome to Notes365!';
  mailOptions.html = '<img src="https://notes365.tk/logo.png" alt="Notes365 Logo"><hr /><p>Hey <b>' + user + '</b>, thanks for registering with Notes365. You can now log in at <a href="https://notes365.tk">Notes365</a> and start creating notes.</p><hr />';
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
  mailOptions.text = 'You can reset using: https://notes365.tk/reset?token=' + token;
  mailOptions.html = '<img src="https://notes365.tk/logo.png" alt="Notes365 Logo"><hr /><p>Hey <b>' + user + '</b>, you can reset your password using <a href="https://notes365.tk/reset?token=' + token + '">this link</a>.</p><hr />';

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
