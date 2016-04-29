/**
 * 
 * Copyright : Bluedot Innovations.

 */
var request = require('request');
    var fenceData =
        {
            "security": {
                "apiKey" : "c2c8211f-796f-4eda-b6ce-05467b5263a9",
                /*
                 customerApiKey is generated when customer registers first time. It is also available
                 on the PointAccess interface in the Edit Profile section.
                 */        
                "customerApiKey": "86577370-7b91-11e4-bcb7-a0481cdc3311"
            },
            "content": {
                "zone": {
                    "zoneId": "722c991a-3ebb-4143-b441-5b0c0cf680a0",
                    "actions": {
                        "urlActions": [
                            {
                                "actionId" : 'dc8209fc-9e92-4f81-8d4e-a96d52f99524',
                                "name": 'open video',
                                "url" : 'http://wwww.google.com'
                            }
                        ],
                        "messageActions": [
                            {
                                "actionId" : 'b83c7308-0191-4905-aac8-dc7dd8e609a3',
                                "name": 'Receive offer',
                                "title" : 'Offer.',
                                "message" : '30% discount'
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