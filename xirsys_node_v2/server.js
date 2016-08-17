var express = require('express');
var https = require('https');
var fs = require('fs');
var path = require('path');
var qs = require('querystring');

var app = express();
var srvPort = 8000;

var rtcAPI = 'service.xirsys.com';

// API Details - See Your Xirsys Account for Details
var ident = 'username'; //your username
var secret = 'fd50934c-57a5-4ad8-8d11-acae5786bcfb'; //your secret key
var domain = 'www.mydomain.com'; //your username
var application = 'default'; //your application name
var room = 'default'; //your room name

//SSL certificate.  Webrtc needs to be in a secure domain to do Audio / Video Sharing.
var opts = {
    key:fs.readFileSync(path.join( __dirname, 'server.key')),
    cert:fs.readFileSync(path.join( __dirname, 'server.crt'))
};

var server = https.createServer(opts, app).listen(srvPort);

console.log('Server on Port '+srvPort);

app.use(function(req, res, next){
    console.log('req: ',req.method,' for: ',req.url);
    next();
});

app.use(express.static('./public'));

//Returns Secure token to connect to the service.
app.post('/webrtc/signal/token', function(req, res){
    console.log('GET SIGNAL TOKEN!');
    body = '';
    req.on('data', function(d){
        body += d;
    });
    req.on('end', function(){
        var username = qs.parse(body).username;
        console.log('User request RTC Token username: ',username);

        var o = {
            ident: ident,
            secret: secret,
            domain: domain,
            application: application,
            room: room,
            secure: '1',
            username: username
        };
        bodyString = JSON.stringify(o);
        //console.log('User request RTC Token data: ',bodyString);
        options = {
            host: rtcAPI,
            path: '/signal/token',
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Content-Length':bodyString.length
            }
        };
        //get RTC token for user, send token back in response.
        https.request(options, function(httpres) {
            var str = '';
            httpres.on('data', function(data){ str += data; });
            httpres.on('error', function(e){ console.log('error: ',e); });
            httpres.on('end', function(){ 
                console.log("RTC Token! "+req.url,str); 
                res.writeHead(200, 'Content-Type', 'application/json');
                res.end(str);
            });
        }).write(bodyString);
    });
});

//Returns List of valid signaling servers that the clients can connect to.
app.get('/webrtc/signal/list',function(req, res){
    console.log("GET SIGNALS LIST!");

    var o = {
        ident: ident,
        secret: secret,
        domain: domain,
        application: application,
        room: room,
        secure: '1'
    };
    bodyString = JSON.stringify(o);
    //console.log('User request RTC List data: ',bodyString);

    options = {
        host: rtcAPI,
        path: '/signal/list',
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            'Content-Length':bodyString.length
        }
    };
    //get RTC server List for user.
    https.request(options, function(httpres) {
        var str = '';
        httpres.on('data', function(data){ str += data; });
        httpres.on('error', function(e){ console.log('error: ',e); });
        httpres.on('end', function(){ 
            console.log("RTC Server List!", str);
            res.writeHead(200, 'Content-Type', 'application/json');
            res.end(str);
        });
    }).write(bodyString);
});

//Returns a Valid ICE server setup to handle the WebRTC handshake and TURN connection if needed.
app.post('/webrtc/ice',function(req, res){
    console.log("GET ICE LIST!");
    var o = {
        ident: ident,
        secret: secret,
        domain: domain,
        application: application,
        room: room,
        secure: '1'
    };
    bodyString = JSON.stringify(o);

    console.log('User request ICE: ',bodyString);

    options = {
        host: rtcAPI,
        path: '/ice',
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Content-Length':bodyString.length
        }
    };
    //get RTC server List for user.
    https.request(options, function(httpres) {
        var str = '';
        httpres.on('data', function(data){ str += data; });
        httpres.on('error', function(e){ console.log('error: ',e); });
        httpres.on('end', function(){ 
            console.log("ICE String!", str);
            res.writeHead(200, 'Content-Type', 'application/json');
            res.end(str);
        });
    }).write(bodyString);
});
