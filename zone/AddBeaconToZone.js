/**
 * Created by Arun on 6/10/2014.
 * Copyright : Bluedot Innovations.
 * Owner :
 */
var request = require('request');
    var fenceData =
    {
        "security": {
            "apiKey": "fe1b2108-5e5d-45fd-94fe-bdb0c3103748",
            "customerApiKey": "86577370-7b91-11e4-bcb7-a0481cdc3311"
        },
        "content": {
            "zone": {
                "zoneId": "8da20128-4c20-460a-ba22-c5275ef3a9c6",
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
    json: fenceData
};

    request(options,
        function (error, response, body) {
            if (error) {
                console.log(error);
            }
            console.log(response.body);
        }
    );

