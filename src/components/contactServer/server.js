const express = require('express')
const app = express()
require("dotenv").config()

const bodyParser = require("body-parser")
const cors = require("cors")
const postmark = require("postmark")
const serverToken = process.env.SERVER_TOKEN
const client = new postmark.ServerClient(serverToken);

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

app.post("/send_mail", cors(), (req, res) => {
     client.sendEmail(
        {
            From: process.env.MAIL_FROM,
            To: process.env.MAIL_TO,
            Subject: "Contact request by " + req.body.name,
            HtmlBody: `
            <p>You have a new contact request</p>
            <h3>Contact Details</h3>
            <ul>  
              <li>Name: ${req.body.name}</li>
              <li>Email: ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
          `
        }
    ).catch((error)=> {
      console.log(error);
    })
})

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is listening on port 4000")
})
