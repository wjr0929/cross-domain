var express = require('express');
var http = require('http');
var app = express();

var opt = {
    hostname: 'funnymm.com',        // 这里别加http://，否则会出现ENOTFOUND错误 
    port: 80,
    path: ''
}

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});

app.get('*', function(request, response){
    opt.path = request.originalUrl;
    var req = http.request(opt, function(res){
        res.setEncoding('utf8');
        var body = '';
        res.on('data', function(chunk){
            body += chunk;
        });
        res.on('end', function(){
            body = JSON.parse(body);
            response.send(body);
        })
    })
    req.end();
});

app.post('*', function(request, response){
    opt.path = request.originalUrl;
    var req = http.request(opt, function(res){
        res.setEncoding('utf8');
        var body = '';
        res.on('data', function(chunk){
            body += chunk;
        });
        res.on('end', function(){
            body = JSON.parse(body);
            response.send(body);
        })
    })
    req.end();
});

app.listen(3000);
console.log('listening on port 3000');

