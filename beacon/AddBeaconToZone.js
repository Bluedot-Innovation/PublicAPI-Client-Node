/**
 * Created by Bluedot Team on 6/10/2014.
 * Copyright : Bluedot Innovations.
 * Owner :
 */
var request = require('request');
    var zoneData =
    {
        "security": {
            "apiKey": 'c2c8211f-796f-4eda-b6ce-05467b5263a9',
            "customerApiKey": '86577370-7b91-11e4-bcb7-a0481cdc3311'
        },
        "content": {
            "zone": {
                "zoneId": "d69781dc-3cb1-4303-9888-1800060fabb6",
                "beacons": [
                    {
                        beaconId : "f4d3c2f3-b2ba-4529-adac-18af1598ee4f",
                        proximity : 1
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