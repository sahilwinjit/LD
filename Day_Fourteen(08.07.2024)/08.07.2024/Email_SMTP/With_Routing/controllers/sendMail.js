const nodeMailer = require('nodemailer');
const path = require('path');

const html = `
    <h1>Hello World</h1>
    <p> Using NodeMailer </p>
    <img src="cid:unique" width="300" height="300">
`;

const emails = ['Sahil.Gujarathi@winjit.com', 'sahilgujarathi2002@gmail.com'];

const sendMail = async function (req, res) {
    const transporter = nodeMailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: 'emergingtech@winjit.com',
            pass: 'CJXe3vis24gfdgZ57m76'
        },
        // tls: {
        //     rejectUnauthorized: false
        // }
    });

    const imagePath = path.join(__dirname, '..', 'public', 'img.png');

    const info = await transporter.sendMail({
        from: 'Winjit Technologies Pvt Ltd <emergingtech@winjit.com>',
        to: emails,
        subject: 'Testing, testing, 123',
        html: html,
        attachments: [
            {
                filename: 'img.png',
                path: imagePath,
                cid: 'unique'
            }
        ]
    });

    console.log("Message sent: " + info.messageId);
    console.log(info.accepted);
    console.log(info.rejected);

    res.send("Mail Sent.");
};

module.exports = sendMail;

