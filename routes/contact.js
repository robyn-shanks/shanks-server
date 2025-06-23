const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const bodyParser = require('body-parser');
const nodeMailjet = require('node-mailjet');
const MJ_APIKEY_PUBLIC = "a85fc56e69594f1164cc753e9f390f78";
const MJ_APIKEY_PRIVATE = "3f63c8ac3f78804f29979ffe5b436c79";

router.use(bodyParser.json());

router.post('/', async (req, res) => {
  const { userEmail, subjectHeader, message } = req.body;

  
  let transporter = nodemailer.createTransport({
    host: "in-v3.mailjet.com",
    port: 587,
    secure: false,
    auth: {
      user: MJ_APIKEY_PUBLIC,
      pass: MJ_APIKEY_PRIVATE
        }
    });


    let emailToSend = {
      from: userEmail,
      to: "robynshanks35@gmail.com", 
      subject: subjectHeader,
        text: message,
        html: '<p><b>' + message + '</b></p>'
    };
    
    const response = transporter.sendMail(emailToSend, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.emailToSend);
            return process.exit(1);
        }
        
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });  
    console.log(res.body);
});

module.exports = router;


