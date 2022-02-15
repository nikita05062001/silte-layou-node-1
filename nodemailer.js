const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, //465 true
    auth: {
        user: 'podvorie.baza@bk.ru',
        pass: 'udkaFrHRJkVj3FvjW9bW'
    }
})

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err)
        console.log("Email sent: ", info);
    })
}
module.exports = mailer;