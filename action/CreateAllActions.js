/**
 * @author Bluedot Innovation
 * Copyright (c) 2016 Bluedot Innovation. All rights reserved.
 * Create All Actions client demonstrates adding all the different types of actions to an existing zone 
 * using the 'request' node module.
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
            	/* The zoneId is the id of the zone being updated. This can be fetched by calling GET Zones API*/
                "zoneId": "722c991a-3ebb-4143-b441-5b0c0cf680a0", 
                "actions": {
                    "customActions": [
                        {
                            "name": "A Custom Application action"
                        }
                    ],
                    "soundActions": [
                        {
                            "name": "A Sound action"
                        }
                    ],
                    "vibrationActions": [
                        {
                            "name": "A Vibration action"
                        }
                    ],
                    "urlActions": [
                        {
                            "name": "Bluedot URL",
                            "url": "http://www.bluedotinnovation.com"
                        }
                    ],
                    "messageActions": [
                        {
                            "name": "Welcome to Bluedot Innovation",
                            "title": "Welcome to Bluedot Innovation Message",
                            "message": "Welcometo Bluedot Innovation."
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