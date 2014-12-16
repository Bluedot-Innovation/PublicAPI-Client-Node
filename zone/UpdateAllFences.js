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
            "zoneId": 'b80c81af-7bb8-4c85-9340-b816da5a0ca5',
            "fences": {
                "rectangles": [
                    {
                        "fenceId": 'b9875caf-5d33-4bbd-bea3-2144e60eb41a',
                        "name": "A bounding box with north east and south west",
                        "color": "#8b4dff",
                        "northEast": {
                            "latitude": -37.81544591805361,
                            "longitude": 144.9786114692688
                        },
                        "southWest": {
                            "latitude": -37.81758175613945,
                            "longitude": 144.9731397628784
                        }
                    }
                ],
                "circles": [
                    {
                        "fenceId": '00f3f2af-bcdf-494e-a81c-481aff88f992',
                        "name": "Test Circular fence with 8M radius",
                        "color": "#000ffff",
                        "radius" : 200.8360056433831,
                        "center": {
                            "latitude" : -37.81566628950337,
                            "longitude" : 144.9764871544965
                        }
                    }
                ],
                "polygons": [
                    {
                        "fenceId": '36c9521e-3e8b-437a-a27d-9527c46a0b55',
                        "name": "A Polygonal Fence",
                        "color": "#836bff",
                        "vertices": [
                            {
                                "latitude" : -37.818717,
                                "longitude" : 144.983085
                            },
                            {
                                "latitude" : -37.819540,
                                "longitude" : 144.982125
                            },
                            {
                                "latitude" : -37.820298,
                                "longitude" : 144.985178
                            },
                            {
                                "latitude" : -37.820468,
                                "longitude" : 144.984228
                            },
                            {
                                "latitude" : -37.818768,
                                "longitude" : 144.984330
                            },
                            {
                                "latitude" : -37.819476,
                                "longitude" : 144.985033
                            },
                            {
                                "latitude" : -37.820527,
                                "longitude" : 144.982978
                            },
                            {
                                "latitude" : -37.818887,
                                "longitude" : 144.982587
                            }
                        ]
                    }
                ]
            }
        }
    }
};
var options = {
    uri: 'https://api.bluedotinnovation.com/1/"fences"',
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