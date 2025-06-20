let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "adisa.khalid225@gmail.com",
		pass: "ayosfskissumhuzz",
	},
});

let mailOptions = {
	from: "adisa.khalid225@gmail.com",
	to: "msart4real@yahoo.com",
	subject: "Sending Email using Node.js",
	text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log("Email sent: " + info.response);
	}
});
