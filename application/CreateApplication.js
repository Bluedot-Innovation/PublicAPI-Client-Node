/**
 * @author Bluedot Innovation
 * Copyright (c) 2016 Bluedot Innovation. All rights reserved.
 * Create Application client demonstrates adding an application to your Bluedot backend 
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
            "packageName": "au.com.bluedot.creationtest",
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
