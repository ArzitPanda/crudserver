const nodemailer = require('nodemailer');

const sendMailTo = async (req, res) => {


    // const mailchimpTx = require("@mailchimp/mailchimp_transactional")("1d7de4c3bc8e3781aa4251b3159784c4-us18");

 
    //     const response = await mailchimpTx.users.ping();
    //     console.log(response);
     

   var transport =
    nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "e718b45de36fd8",
      pass: "a9534a78d7eae8"
    }
  });
    console.log("Mail tunnel created");
    console.log("Mail sending start");
    
     try
     {
       await  transport.sendMail({
            from: "arzit@mail.ee",
            to: "arijit43.143@gmail.com",
            subject: "Hello ✔",
            text: "Hello world?",
            html: "<b>Hello world?</b>",
            });
            res.status(200).json({message: "Mail sent successfully"});
     } 
        catch (error)
        {
            console.log(error);
            res.status(500).json({message: "Mail not sent"});
        }
        
    }    

    module.exports = { sendMailTo };