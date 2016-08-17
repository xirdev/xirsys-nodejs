// 'ident' and 'secret' should ideally be passed server-side for security purposes.
// If secureTokenRetrieval is true then you should remove these two values.

// Insecure method
/*var xirsysConnect = {
	secureTokenRetrieval : false,
	data : {
		domain : '< www.yourdomain.com >',
		application : 'default',
		room : 'default',
		ident : '< Your username (not your email) >',
		secret : '< Your secret API token >',
		secure : 1
	}
};*/

// Secure method
var xirsysConnect = {
	secureTokenRetrieval : true,//change this to true for authenticating from server
	server : '/webrtc/',//<-- Path To Server Auth (node server listens to this path)
	data : {
		domain : '< www.yourdomain.com >',
		application : 'default',
		room : 'default',
		ident : '< Your username (not your email) >',
		secret : '< Your secret API token >',
		secure : 1
	}
};

