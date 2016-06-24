/**
 * @author Bluedot Innovation
 * Copyright (c) 2016 Bluedot Innovation. All rights reserved.
 * Update Zone client demonstrates updating fields of an existing zone using 'request' node module.
 * 100 zones are returned per call, increment the page number parameter to get records corresponding to the page.
 */
var request = require('request');
var zoneTimeActiveData =
	{
	    "security": {
	    	/* The apiKey is generated when you create an application. */
	        "apiKey" : 'c2c8211f-796f-4eda-b6ce-05467b5263a9',
	        /* The customerApiKey is generated when customer registers first time. It is also available
	         * on the PointAccess interface in the Edit Profile section. */             
	        "customerApiKey": '86577370-7b91-11e4-bcb7-a0481cdc3311'
	    },
	    "content": {
	        "zone": {
	        	/* The zoneId is the id of the zone being updated. This can be fetched by calling GET zones API */
	        	"zoneId":"cc6f9dd1-3d69-454d-abdd-58176cbf67dc",
	            "zoneName": "starbucks",
	            /* Time in Hour:Minute format.*/
	            "minimumRetriggerTime": "00:01",
	            "enableCheckOut": true,
	            "timeActive": {
	                "from": {
	                    /* Time in Hour:Minute format.*/
	                    "time": "0:00",
	                    "period": "am"
	                },
	                "to": {
	                    /* Time in Hour:Minute format.*/
	                    "time": "12:00",
	                    "period": "pm"
	                }
	            }
	        }
	    }
	};

var zoneActiveAllDayData =
	{
	    "security": {
	    	/* The apiKey is generated when you create an application. */
	        "apiKey" : 'c2c8211f-796f-4eda-b6ce-05467b5263a9',
	        /* The customerApiKey is generated when customer registers first time. It is also available
	         * on the PointAccess interface in the Edit Profile section. */                
	        "customerApiKey": '86577370-7b91-11e4-bcb7-a0481cdc3311'
	    },
	    "content": {
	        "zone": {
	        	/* The zoneId is the id of the zone being updated. This can be fetched by calling GET zones API */
	        	"zoneId":"cc6f9dd1-3d69-454d-abdd-58176cbf67dc",
	            "zoneName": "starbucks",
	            /* Time in Hour:Minute format.*/
	            "minimumRetriggerTime": "00:01",
	            "enableCheckOut": true,
	            "activeAllDay": true
	        }
	    }
	};

var options = {
    uri: 'https://api.bluedotinnovation.com/1/zones',
    method: 'POST',
    json: zoneTimeActiveData
};

request(options,
    function (error, response, body) {
        if (error) {
            console.log(error);
        }
        console.log(JSON.stringify(response.body));
    }
);