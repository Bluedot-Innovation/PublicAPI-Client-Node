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
                        "fences": {
                            "circles": [
                                {
                                    "name": "722c991a-3ebb-4143-b441-5b0c0cf680a0",
                                    "color": "#000ffff",
                                    "radius": 8.00,
                                    "center": {
                                        "latitude": -37.8159544565362,
                                        "longitude": 144.9723565578461
                                    }
                                }
                            ],
                            "rectangles": [
                                {
                                    "name": "A bounding box with north east and south west",
                                    "color": "#3559e",
                                    "northEast": {
                                        "latitude": -37.81758175613945,
                                        "longitude": 144.9731397628784
                                    },
                                    "southWest": {
                                        "latitude": -37.8159544565362,
                                        "longitude": 144.9723565578461                                        
                                    }
                                }
                            ],
                            "polygons": [
                                {
                                    "name": "A Polygonal Fence",
                                    "color": "#000ffff",
                                    "vertices": [
                                        {
                                            "longitude" : 144.9786221981049,
                                            "latitude" : -37.81464920072108
                                        },
                                        {
                                            "longitude" : 144.9755859375,
                                            "latitude" : -37.81670030664056
                                        },
                                        {
                                            "longitude" : 144.9807143211365,
                                            "latitude" : -37.81650536927249
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                }
            };
var options = {
    uri: 'https://api.bluedotinnovation.com/1/fences',
    method: 'POST',
    json: fenceData
};

request(options,
    function (error, response) {
        if (error) {
            console.log(error);
        }
        console.log(response.body);
    }
);