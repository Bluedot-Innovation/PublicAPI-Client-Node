/**
 * @author Bluedot Innovation
 * Copyright (c) 2016 Bluedot Innovation. All rights reserved.
 * Update Message and URL Action client demonstrates updating an existing message and URL action of an existing zone
 * using the 'request' node module  
 */
var request = require('request');
var actionData =
    {
        "security": {
        	/* The apiKey is generated when you create an application. */
            "apiKey" : "c2c8211f-796f-4eda-b6ce-05467b5263a9",
            /* The customerApiKey is generated when customer registers first time. It is also available
             * on the PointAccess interface in the Edit Profile section. */        
            "customerApiKey": "86577370-7b91-11e4-bcb7-a0481cdc3311"
        },
        "content": {
            "zone": {
            	/* The zoneId is the id of the zone being updated. This can be fetched by calling GET Zones API */
                "zoneId": "722c991a-3ebb-4143-b441-5b0c0cf680a0",
                "actions": {
                    "urlActions": [
                        {
                        	/* The actionId is the id of the URL action being updated. 
                        	 * This can be fetched by calling zones/getAll API */
                            "actionId" : 'dc8209fc-9e92-4f81-8d4e-a96d52f99524',
                            "url" : 'http://wwww.google.com'
                        }
                    ],
                    "messageActions": [
                        {
                        	/* The actionId is the id of the message action being updated. 
                        	 * This can be fetched by calling zones/getAll API */
                            "actionId" : 'b83c7308-0191-4905-aac8-dc7dd8e609a3',
                            "title" : 'Offer.',
                            "message" : '30% discount'
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