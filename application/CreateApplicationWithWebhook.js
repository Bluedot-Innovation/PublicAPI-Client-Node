/**
 * @author Bluedot Innovation
 * Copyright (c) 2016 Bluedot Innovation. All rights reserved.
 * Add Application with Webhook client demonstrates adding an application for which a Webhook will be enabled, to your Bluedot backend
 * using the 'request' node module.
 */

var request = require('request');

var applicationData = {
    "security": {
    	/* The customerApiKey is generated when customer registers first time. It is also available
         * on the PointAccess interface in the Edit Profile section. */ 
        "customerApiKey": "86577370-7b91-11e4-bcb7-a0481cdc3311"
    },
    "content": {
        "application" : {
            "name" : "A Bluedot Application",
            "packageName": "com.bluedot.creationtest",
            /* Time in Hour:Minute format.*/
            "nextRuleUpdateIntervalFormatted": "00:07",
            "webhook": {
            	/*The URL of the server where the webhooks will be received.*/
            	"url": "https://api.campusapp.com/webhook/checkinreceiver",
                "enabled": true,
                /*The Security Token Key is the name of the field to be sent in the POST request header.*/
                "securityTokenKey": "authToken",
                /*The Security Token Value field is value of the Security Token Key field sent in the POST request header.*/
                "securityTokenValue": "f2f7a58c-f0d5-498c-9bad-acbc89923dc5"
            }
        }
    }
};

var options = {
    uri: 'https://api.bluedotinnovation.com/1/applications',
    method: 'POST',
    json: applicationData
};

request ( options,
    function (error, response, body) {
        if (error) {
            console.log(error);
        }
        console.log(JSON.stringify(response.body));
    }
);
