/**
 * @author Bluedot Innovation
 * Copyright (c) 2016 Bluedot Innovation. All rights reserved.
 * Create URL Action client demonstrates adding an URL action to an existing zone 
 * using the 'request' node module.
 */
var request = require('request');
var actionData =
	{
	    "security": {
	    	/* The apiKey is generated when you create an application. */
	        "apiKey" : "dcbd2c48-577e-4187-959e-b8f9216e9875",
	        /* The customerApiKey is generated when customer registers first time. It is also available
             * on the PointAccess interface in the Edit Profile section. */  
	        "customerApiKey": "86577370-7b91-11e4-bcb7-a0481cdc3311"
	    },
	    "content": {
	        "zone": {
	        	/* The zoneId is the id of the zone being updated. This can be fetched by calling GET Zones API */
	            "zoneId": "1c48dc46-b516-4396-95ca-057e730c4bd7",
	            "actions": {
	                "urlActions": [
	                    {
	                        "name" : 'My URL actions',
	                        "url" : 'http://wwww.google.com'
	 
	                    }
	                ]
	            }
	        }
	    }
	};
 
var options = {
    uri: 'https://api.bluedotinnovation.com/1/actions',
    method: 'POST',
    json: actionData
};
request(options,
    function (error, response, body) {
        if (error) {
            console.log(error);
        }
        console.log(JSON.stringify(response.body));
    }
);