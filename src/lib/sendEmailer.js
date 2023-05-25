const nodemailer = require('nodemailer');
require('dotenv').config();

async function mailClient(subject, html, mailTo) {
  const smtpTransport = nodemailer.createTransport({
    // service: 'Gmail', //OR use config below
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,

    // requireTLS: true,
    // authMethod: proposalPlugins,

    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_USER_PASSWORD,
    },
  });

  await smtpTransport.sendMail(
    {
      from: process.env.MAIL_USER,
      to: mailTo,
      subject,
      // text: sum,
      html,
    },
    (error, response) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Сообщение отправлено на почту');
      }
    },
  );
}

// mailClient('alymkulov.almambet@gmail.com', 'rabotaet je').catch(console.error);

module.exports = mailClient;
