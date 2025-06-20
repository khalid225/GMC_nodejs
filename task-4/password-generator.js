var generator = require("generate-password");

//generate 10 passwords
var passwords = generator.generateMultiple(10, {
	length: 10,
	uppercase: false,
});

console.log(passwords[Math.round(Math.random() * 10)]);
