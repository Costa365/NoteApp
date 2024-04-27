const nodemailer = require('nodemailer');

const emailUser = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.yahoo.com',
  port: 465,
  service:'yahoo',
  secure: false,
  auth: {
    user: emailUser,
    pass: emailPassword
  },
  debug: false,
  logger: true
});

var mailOptions = {
  from: emailUser,
  to: 'dummy@dummy.com',
  subject: '',
  html: ''
};

const sendWelcomeMail = (address, user) => {
  mailOptions.to = address;
  mailOptions.subject = 'Welcome to Notes365!';
  mailOptions.html = '<img src="https://notes365.costa365.site/logo.png" alt="Notes365 Logo"><hr /><p>Hey <b>' + user + '</b>, thanks for registering with Notes365. You can now log in at <a href="https://notes365.costa365.site">Notes365</a> and start creating notes.</p><hr />';
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
  mailOptions.html = '<img src="https://notes365.costa365.site/logo.png" alt="Notes365 Logo"><hr /><p>Hey, you can reset your password using <a href="https://notes365.costa365.site/reset?token=' + token + '">this link</a>.</p><hr />';

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
