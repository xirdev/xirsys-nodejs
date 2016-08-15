# xirsys-nodejs
Querying the Xirsys API with Nodejs

## About V2

This is an example using Nodejs to securely query the Xirsys API from a serverside counterpart.  Although we are using Nodejs in this example you can also use other technologies like PHP, Java C# and the sort.


## Start

1.  Download and install the express module for Node.js globaly or in the root of the project.

```
npm install express
```

2.  Open the server.js file included in the download, in any text editor.

3.  Update the credentials for your account at the top of the document adding your ident, your secret token and domain information.
```
	var ident = 'jerrychabolla';
	var secret = 'iasaiw42o20m240204ij202r0fifjd';
	var domain = 'www.mydomain.com';
	var application = 'default';// '[Optional Application]'
	var room = 'default';//'[Optional Room]';
```

4.  Add your secure certificate and key or create a self signed one.
```
key:fs.readFileSync(path.join( __dirname, 'server.key')),
cert:fs.readFileSync(path.join( __dirname, 'server.crt'))
```

5.  From Terminal or a DOS prompt run the server file.
```
node server
```
6.  Open a browser window and enter https://localhost:8000/test.html 

NOTE:  If using a self signed certificate you will get a warning and you will have to hit proceed from the browser to continue. 

## Using the GUI

Click on each button in the GUI to tell node to return the information.  If your info was entered correctly you should see the data populate within the text fields above each button respectfully.

