import http = require('http')

var port = 4567

var verify = function (req: http.IncomingMessage, res: http.ServerResponse) {
	if (req.method == 'POST') {
		var body : Buffer
		req.on("data", function (chunk: Buffer) {
			body = chunk
		})
		req.on("end", function() {
			var post = JSON.parse(body.toString())

			res.writeHead(200, { 'Content-Type': 'text/plain' })
			res.write("Got a POST.\n")
			res.end(JSON.stringify(post, null, '\t'))
		})
	} else {
		res.writeHead(200, { 'Content-Type': 'text/plain' })
		res.end("Please POST something.\n")
	}
}

http.createServer(verify).listen(port)

console.log("Server running on port " + port)
