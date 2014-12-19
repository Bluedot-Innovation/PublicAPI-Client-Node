/**
 * 
 * Copyright : Bluedot Innovations.

 */
var request = require('request');
    var fenceData =
        {
            "security": {
                "apiKey" : '4d3a1b60-4dc4-11e4-ad0a-a0481cdba483',
                /*
                 customerApiKey is generated when customer registers first time. It is also available
                 on the PointAccess interface in the Edit Profile section.
                 */                
                "customerApiKey": '4d3a1b60-4dc4-11e4-ad0a-a0481cdba483'
            },
            "content": {
                "zone": {
                    "zoneId": '0caaf9ee-509f-47bc-a453-25fa26a6f2a4',
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
        console.log(response.body);
    }
);