/**
 * Created by Bluedot Team on 16/09/2014.
 * Copyright : Bluedot Innovation.
 *
 */

var request = require('request');

var applicationData = {
    "security": {
        /*
         customerApiKey is generated when customer registers first time. It is also available
         on the PointAccess interface in the Edit Profile section.
         */
        "customerApiKey": "86577370-7b91-11e4-bcb7-a0481cdc3311"
    },
    "content": {
        "application" : {
            "applicationId" : "6e28197b-81a3-4995-9990-93ea3178cb5e",
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
