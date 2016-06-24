/**
 * @author Bluedot Innovation
 * Copyright (c) 2016 Bluedot Innovation. All rights reserved.
 * Update Application client demonstrates updating an existing application to your Bluedot backend 
 * using 'request' node module.
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
        	/* This ID is retrieved through the GET Applications call */
            "applicationId" : "6e28197b-81a3-4995-9990-93ea3178cb5e",
            /* Time in Hour:Minute format.*/
            "nextRuleUpdateIntervalFormatted": "00:07"
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
