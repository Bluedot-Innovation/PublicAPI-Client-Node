/**
 * @author Bluedot Innovation
 * Copyright (c) 2016 Bluedot Innovation. All rights reserved.
 * Create Beacon client demonstrates adding a beacon to your Bluedot backend using 'request' node module.
 */

var request = require('request');

var beaconData = {
    security: {
    	/* The apiKey is generated when you create an application. */
        apiKey : 'c2c8211f-796f-4eda-b6ce-05467b5263a9',
        /* The customerApiKey is generated when customer registers first time. It is also available
         * on the PointAccess interface in the Edit Profile section. */
        customerApiKey: '86577370-7b91-11e4-bcb7-a0481cdc3311'
    },
    content: {
        beacon : {
            name: "Cafe Entrance",
            proximityUUID: "f7826da6-4fa2-4e98-8024-bc5b71e0898f",
            longitude: "123.34455",
            latitude: "47.777888",
            major: 12,
            minor: 13,
            type: "IOS"
        }
    }
};
var options = {
    uri: 'https://api.bluedotinnovation.com/1/beacons',
    method: 'POST',
    json: beaconData
};

request ( options,
    function (error, response, body) {
        if (error) {
            console.log(error);
        }
        console.log(JSON.stringify(response.body));
    }
);
