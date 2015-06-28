var server = require('express');
var request = require('request');
var cors = require('cors');

var app = server();

app.use(cors());

app.get('/', function(req, res) {
	var url = req.query.url;

	if (!url) {
		res.status(400).send('missing url');
	}

	request(url, function(err, response, body) {
		if (err) {
			return res.status(400).send('Something went wrong when getting: ' + url);
		}

		return res.send(body);
	});
});

var port = 1234;
app.listen(1234);
console.log('listening on port ', port);