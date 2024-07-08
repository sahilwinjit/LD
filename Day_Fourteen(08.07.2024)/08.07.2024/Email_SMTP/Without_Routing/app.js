const nodeMailer = require('nodemailer');

const html = `
    <h1>Hello World</h1>
    <p> Using NodeMailer </p>
    <img src="cid:unique" width="300" height"300">
`;

const emails = [ 'Sahil.Gujarathi@winjit.com' , 'sahilgujarathi2002@gmail.com'];

async function main() {
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

    const info = await transporter.sendMail({
        from: 'Winjit Technologies Pvt Ltd <emergingtech@winjit.com>',
        to: emails,
        subject: 'Testing, testing, 123',
        html: html,
        attachments: [
            {
                filename: 'img.png',
                path: './img.png',
                cid: 'unique'
            }
        ]
    });

    console.log("Message send: " + info.messageId);
    console.log(info.accepted);
    console.log(info.rejected);
}

main().catch(e => console.log(e));

