/**
 * @author Bluedot Innovation
 * Copyright (c) 2016 Bluedot Innovation. All rights reserved.
 * Add Beacon to Zone client demonstrates adding a beacon to an existing zone of your Bluedot backend 
 * using 'request' node module.
 */
var request = require('request');
    var zoneData =
    {
        "security": {
        	/* The apiKey is generated when you create an application. */
            "apiKey": 'c2c8211f-796f-4eda-b6ce-05467b5263a9',
            /* The customerApiKey is generated when customer registers first time. It is also available
             * on the PointAccess interface in the Edit Profile section. */
            "customerApiKey": '86577370-7b91-11e4-bcb7-a0481cdc3311'
        },
        "content": {
            "zone": {
            	/* The zoneId is the id of the zone being updated. This can be fetched by calling GET Zones API */
                "zoneId": "d69781dc-3cb1-4303-9888-1800060fabb6",
                "beacons": [
                    {
                    	/*This is the ID of a beacon registered to a customer's account, 
                    	 * which has to be associated with a zone.  */
                        "beaconId" : "f4d3c2f3-b2ba-4529-adac-18af1598ee4f",
                        "proximity" : 1
                    }
                ]
            }
        }
};

var options = {
    uri: 'https://api.bluedotinnovation.com/1/zones/beacons',
    method: 'POST',
    json: zoneData
};

request(options,
    function (error, response, body) {
        if (error) {
            console.log(error);
        }
        console.log(JSON.stringify(response.body));
    }
);