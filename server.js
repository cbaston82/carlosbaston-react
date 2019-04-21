const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const compression = require('compression')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const normalizePort = port => parseInt(port, 10)
const PORT = normalizePort(process.env.PORT || 3001)

const app = express()
const dev = app.get('env') !== 'production'

if (!dev) {
  app.disable('x-powered-by')
  app.use(compression())
  app.use(morgan('common'))
}

if (dev) {
  app.use(morgan('dev'))
}

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.post('/api/form', (req, res, next) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.contact_name}</li>
        <li>Email: ${req.body.contact_email}</li>
        <li>Subject: ${req.body.contact_subject}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.contact_words}</p>
    `

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'carlosbaston82@gmail.com',
        pass: '6J%En3zd96'
      }
     });

     const mailOptions = {
      from: req.body.contact_email, // sender address
      to: 'carlosbaston82@gmail.com', // list of receivers
      subject: 'From: carlosbaston.com', // Subject line
      replyTo: req.body.contact_email,
      text: req.body.contact_subject,
      html: htmlEmail// plain text body
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }
      res.status(200).send(info)
    })
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})