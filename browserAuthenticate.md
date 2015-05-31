##node.js的简单浏览器验证
```
var http = require('http');

var server = http.Server(function(req, res) {

	res.statusCode = 401;

	res.setHeader('WWW-Authenticate', 'Basic realm="Authenticate Required."');

	res.end('Unauthorized');

});

server.listen(8080);

```
