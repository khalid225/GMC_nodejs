var fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", function (err) {
	if (err) {
		return console.error(err);
	}

	console.log("Data written successfully!");
});

fs.readFile("welcome.txt", function (err, data) {
	if (err) {
		return console.error(err);
	}
	console.log(data);
});
