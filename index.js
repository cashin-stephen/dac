const express = require('express')
const axios = require('axios');
const cors = require('cors');
const app = express();
const sgMail = require('@sendgrid/mail')

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const PORT = 8000;

app.use(jsonParser);
app.use(cors());

app.post("/verify-token", async (req,res) => {
  const { reCAPTCHA_TOKEN, Secret_Key} = req.body;

  try {
    let response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${Secret_Key}&response=${reCAPTCHA_TOKEN}`);
    console.log(response.data);

    return res.status(200).json({
      success:true,
      message: "Token successfully verified",
      verification_info: response.data
    });
  } catch(error) {
    console.log(error);

    return res.status(500).json({
      success:false,
      message: "Error verifying token"
    })
  }
});

app.post("/send-email", async (req,res) => {
    const { message } = req.body;
    console.log(message)
    try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        sgMail.send(message) 
        return res.status(200).json({
            success:true,
            message: "Email Sent",
          });  
    } catch(error) {
        console.log(error);

        return res.status(500).json({
          success:false,
          message: "Error verifying token"
        })
    }
});

app.listen(PORT, () => console.log(`App started on port ${PORT}`));