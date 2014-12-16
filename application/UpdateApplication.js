/**
 * Created by Arun on 16/09/2014.
 * Copyright : Bluedot Innovations.
 *
 */

var request = require('request');

var application = {
    "security": {
        /*
         customerApiKey is generated when customer registers first time. It is also available
         on the PointAccess interface in the Edit Profile section.
         */
        "customerApiKey": '564ecdc0-7e86-11e4-95ff-a0481cdba483'
    },
    "content": {
        "application" : {
            "applicationId" : '564ecdc0-7e86-11e4-95ff-a0481cdba490',
            "name" : 'A Bluedot Application',
            "packageName": "au.com.bluedot.creationtest5",
            /* Time in Hour:Minute format.*/
            "nextRuleUpdateIntervalFormatted": '00:07'
        }
    }
};

var options = {
    uri: 'https://api.bluedotinnovation.com/1/applications',
    method: 'POST',
    json: application
};

request ( options,
    function (error, response, body) {
        if (error) {
            console.log(error);
        }
        console.log(response.body);
    }
);
