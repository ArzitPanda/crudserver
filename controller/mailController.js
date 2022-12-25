const nodemailer = require('nodemailer');

const sendMailTo = async (req, res) => {


    // const mailchimpTx = require("@mailchimp/mailchimp_transactional")("1d7de4c3bc8e3781aa4251b3159784c4-us18");

 
    //     const response = await mailchimpTx.users.ping();
    //     console.log(response);
     

   var transport =
    nodemailer.createTransport({
  
    service: "Hotmail",
    // true for 465, false for other ports
    auth: {
      user: "arzit43@hotmail.com",
      pass: "Panda@2001"
    }
  });
    console.log("Mail tunnel created");
    console.log("Mail sending start");


    

    
     try
     {
       await  transport.sendMail({
            from: "arzit43@hotmail.com",
            to: "arijit43.143@gmail.com",
            subject: "Hello ✔",
            text: "Hello world?",
            html: `<table><tr><td>name</td> </tr><tr><td>phone</td> </tr></table>
            ${req.body.map((item) => {
                return `<tr><td>${item.name}</td></tr><tr><td>${item.phone}</td></tr>`
            })
            }
            `,
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