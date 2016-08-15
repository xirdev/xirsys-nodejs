# xirsys-nodejs
Querying the Xirsys API with Nodejs

## About V2

This is an example using Nodejs to securely query the Xirsys API from a serverside counterpart. Although we are using Nodejs in this example you can also use other technologies like PHP, Java, C# or whatever you prefer.

## Start

Download and install the express module for Node.js globaly or in the root of the project.

```
npm install express
```

Open the server.js file included in the download, in any text editor.

Update the credentials for your account at the top of the document adding your ident, your secret token and domain information.
```
var ident = 'username'; //your username
var secret = 'fd50934c-57a5-4ad8-8d11-acae5786bcfb'; //your secret key
var domain = 'www.mydomain.com'; //your username
var application = 'default'; //your application name
var room = 'default'; //your room name
```

Add your secure certificate and key or create a self signed one.
```
key:fs.readFileSync(path.join( __dirname, 'server.key')),
cert:fs.readFileSync(path.join( __dirname, 'server.crt'))
```

From Terminal or a DOS prompt run the server file.
```
node server
```
Open a browser window and enter https://localhost:8000/test.html 

> NOTE:  If using a self signed certificate you will get a warning and you will have to hit proceed from the browser to continue. 

## Using the GUI

Click on each button in the GUI to tell node to return the information.  If your info was entered correctly you should see the data populate within the text fields above each button respectfully.

