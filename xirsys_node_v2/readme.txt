
This is an example using Nodejs to securely query the Xirsys API from a serverside counterpart. Although we are using Nodejs in this example you can also use other technologies like PHP, Java, C# or whatever you prefer.

1.  Download and install the express module for Node.js globaly or in the root of the project.

	ex:  npm install express

2.  Open the server.js file included in the download, in any text editor.

3.  Update the credentials for your account at the top of the document adding your ident, your secret token and domain information.

ex:

	var ident = 'username'; //your username
	var secret = 'fd50934c-57a5-4ad8-8d11-acae5786bcfb'; //your secret key
	var domain = 'www.mydomain.com'; //your username
	var application = 'default'; //your application name
	var room = 'default'; //your room name


4.  Add your secure certificate and key or create a self signed one.

ex:
	
	key:fs.readFileSync(path.join( __dirname, 'server.key')),
    	cert:fs.readFileSync(path.join( __dirname, 'server.crt'))

5.  From Terminal or a DOS prompt run the server file.

	ex:  node server

6.  Open a browser window and enter https://localhost:8000/webrtc.html or https://localhost:8000/test.html to see the test GUI
	NOTE:  If using a self signed certificate you will get a warning and you will have to hit proceed from the browser to continue. 



USING WEBRTC APP
================
Run the node server file and browse to https://localhost:8000/webrtc.html.

Login with a name, open a new browser window and browse to the same url and enter a different name.  

Select the user from the list and click the call button.  The other window should have an invite to chat popup, click to confirm.

Notice the events on the node server are called to securely retrieve the lists and tokens for the client chats.


USING TEST GUI
==============
Run the node server file and browse to https://localhost:8000/test.html.

Click on each button in the GUI to tell node to return the information.  If your info was entered correctly you should see the data populate within the text fields above each button respectfully.

