/**
 *
 * Copyright : Bluedot Innovations.
 
 */
var request = require('request');
var fenceData =
{
    "security": {
        "apiKey" : "dcbd2c48-577e-4187-959e-b8f9216e9875",
        /*
         customerApiKey is generated when customer registers first time. It is also available
         on the PointAccess interface in the Edit Profile section.
         */
        "customerApiKey": "86577370-7b91-11e4-bcb7-a0481cdc3311"
    },
    "content": {
        "zone": {
            "zoneId": "1c48dc46-b516-4396-95ca-057e730c4bd7",
            "actions": {
                "soundActions": [
                    {
                        "name" : 'A Sound Action'
                    }
                ]
            }
        }
    }
};
 
var options = {
    uri: 'https://api.bluedotinnovation.com/1/actions',
    method: 'POST',
    json: fenceData
};
request(options,
    function (error, response, body) {
        if (error) {
            console.log(error);
        }
        console.log(JSON.stringify(response.body));
    }
);