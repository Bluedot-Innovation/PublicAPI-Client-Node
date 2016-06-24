/**
 * @author Bluedot Innovation
 * Copyright (c) 2016 Bluedot Innovation. All rights reserved.
 * Update Beacon client demonstrates updating a beacon to your Bluedot backend using 'request' node module
 */

var request = require('request');

var beaconData = {
    security: {
    	/* The apiKey is generated when you create an application. */
        apiKey : "8e766280-0b3a-11e5-89f3-1289088180cb",
        /* The customerApiKey is generated when customer registers first time. It is also available
         * on the PointAccess interface in the Edit Profile section. */
        customerApiKey: "203830a0-e272-11e4-a1e0-aa465fbb5c67"
    },
    content: {
        beacon : {
        	/* This is the Id of the becon to be updated and can be retrieved through the GET Beacon call. */
        	beaconId: "ad1a5c15-d3c7-4903-a067-d1cd5d11be1b", 
        	name: "Westfield",
            proximityUuid: "f7826da6-4fa2-4e98-8024-bc5b71e0893e",
			type: "Both",
            longitude: "123.34455",
            latitude: "47.777888",
            major: 12,
            minor: 13,
            macAddress: "00-15-E9-2B-99-3C",
			txPower: -77,
			description: "Westfield sample beacon"
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