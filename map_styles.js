var styles = [];

styles.push({
  title: "wan",
  style: [
    {
      stylers: [
        {saturation: -100},
      ]
    },{
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { lightness: -30 }
      ]
    },{
      featureType: "water",
      elementType: "labels",
      stylers: [
        { invert_lightness: true },
        { lightness: 30 }
      ]
    },{
      featureType: "road",
      stylers: [
        { lightness: 15 }
      ]
    },{
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        { lightness: 25 }
      ]
    },{
      featureType: "landscape.natural.terrain",
      stylers: [
        { visibility: "off" }
      ]
    }
  ]
});

styles.push({
  title: "transit",
  style: [
    {
      stylers: [
        { visibility: "simplified" }
      ]
    },{
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        { lightness: 20 }
      ]
    },{
      featureType: "landscape.natural.terrain",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: -10 },
        { visibility: "on" }
      ]
    },{
      featureType: "road.local",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        { lightness: 25 }
      ]
    }
  ]
});

styles.push({
  title: "noir",
  style: [
    {
      stylers: [
        {visibility: "off"},
      ]
    },{
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { visibility: "on" },
        { color: "#cccccc" }
      ]
    },{
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        { visibility: "on" },
        { color: "#000000" }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { visibility: "on" },
        { color: "#000000" }
      ]
    },{
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [
        { visibility: "on" },
        { color: "#ffffff" }
      ]
    },{
      featureType: "administrative",
      elementType: "labels.text.stroke",
      stylers: [
        { visibility: "on" },
        { color: "#333333" }
      ]
    },{
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        { visibility: "on" },
        { color: "#ffffff" }
      ]
    },{
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [
        { visibility: "on" },
        { color: "#333333" }
      ]
    }
  ]
});

styles.push({
  title: "ships",
  style: [
    {
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { visibility: "on" },
        { color: "#000000" }
      ]
    },{
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [
        { visibility: "on" },
        { color: "#333333" }
      ]
    },{
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        { visibility: "on" },
        { color: "#cccccc" }
      ]
    },{
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        { visibility: "on" },
        { color: "#333333" }
      ]
    },{
      featureType: "administrative.country",
      elementType: "labels",
      stylers: [
        { visibility: "on" },
        { invert_lightness: true },
        { saturation: -100 }
      ]
    },{
      featureType: "administrative.locality",
      elementType: "labels",
      stylers: [
        { visibility: "on" },
        { invert_lightness: true },
        { saturation: -100 }
      ]
    },{
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [
        { visibility: "on" },
        { weight: 1.5 },
        { lightness: -20 }
      ]
    }
  ]
});

styles.push({
  title: "roads noir",
  style: [
  {
    stylers: [
      { visibility: "off" }
    ]
  },{
    featureType: "road",
    stylers: [
      { visibility: "simplified" },
      { lightness: 100 },
      { weight: 1 }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  },{
    featureType: "water",
    stylers: [
      { lightness: -100 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "landscape",
    stylers: [
      { visibility: "simplified" },
      { lightness: -100 }
    ]
  }
]});

// styles.push({
//   title: "slate",
//   style: [
//     {
//       "stylers": [
//         { "visibility": "off" }
//       ]
//     },{
//       "featureType": "landscape",
//       "elementType": "geometry",
//       "stylers": [
//         { "visibility": "on" },
//         { "color": "#aaaaaa" }
//       ]
//     },{
//       "featureType": "water",
//       "elementType": "geometry",
//       "stylers": [
//         { "visibility": "on" },
//         { "color": "#ffffff" }
//       ]
//     },{
//       "featureType": "administrative.country",
//       "elementType": "geometry",
//       "stylers": [
//         { "visibility": "on" },
//         { "color": "#ffffff" },
//         { "weight": 1 }
//       ]
//     }
//   ]
// });

styles.push({
  title: 'simplex',
  style:
  [
    {
      "elementType": "labels",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "elementType": "geometry.fill",
      "stylers": [
        { lightness: 100 },
        { weight: 3 }
      ]
    },{
      "elementType": "geometry.stroke",
      "stylers": [
        { weight: 1.5 },
        { lightness: 50 }
      ]
    },{
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [
        { color: '#8ec5ff' },
        { lightness: 50 }
      ]
    },{
      featureType: 'transit',
      stylers: [
        { visibility: 'off' }
      ]
    }
  ]
});
