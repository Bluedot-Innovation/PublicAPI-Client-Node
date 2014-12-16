/**
 * 
 * Copyright : Bluedot Innovations.

 */
var request = require('request');
    var fenceData =
            {
                security: {
                    apiKey : '77c16870-360a-492b-84c6-d1790abe9cc0',
                    customerApiKey: 'b4fce6c7-7b9f-4525-9d5c-9e2b19e6f6b3'
                },
                content: {
                    zone: {
                        zoneId: '80263cd5-3be2-4a3a-a6e3-360adbbcc6ed',
                        fences: {
                            circles: [
                                {
                                    name: "Test Circular fence with 8M radius",
                                    color: "#000ffff",
                                    radius: 8.00,
                                    center: {
                                        latitude: -37.8159544565362,
                                        longitude: 144.9723565578461
                                    }
                                }
                            ],
                            rectangles: [
                                {
                                    name: "A bounding box with north east and south west",
                                    color: "#3559e",
                                    northEast: {
                                        latitude: -37.8159544565362,
                                        longitude: 144.9723565578461
                                    },
                                    southWest: {
                                        latitude: -37.81758175613945,
                                        longitude: 144.9731397628784
                                    }
                                }
                            ],
                            polygons: [
                                {
                                    name: "A Polygonal Fence",
                                    color: "#000ffff",
                                    vertices: [
                                        {
                                            longitude : 144.9786221981049,
                                            latitude : -37.81464920072108
                                        },
                                        {
                                            longitude : 144.9755859375,
                                            latitude : -37.81670030664056
                                        },
                                        {
                                            longitude : 144.9807143211365,
                                            latitude : -37.81650536927249
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