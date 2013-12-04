var map;
var editor;
var currentStyleIndex;
var heatmap;
var heatmapData = new google.maps.MVCArray();

function initialize() {
  map = new google.maps.Map(document.getElementById('map_canvas'), {
    center: new google.maps.LatLng(37.77, -122.44),
    zoom: 13,
    maxZoom: 20,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
      position: google.maps.ControlPosition.LEFT_CENTER
    }
  });

  google.maps.event.addDomListener(map, 'click', addHeatmapData);
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 20
  });

  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(document.getElementById('code'));
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(document.getElementById('search'));
  map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(document.getElementById('carousel_button'));

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('static'));
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('style'));
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('heatmap'));
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('transit'));
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('marker'));

  editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/json");

  var input = document.getElementById('search_input');
  var options = {
    types: ['(cities)'],
  };

  var autocomplete = new google.maps.places.Autocomplete(input, options);

  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      return;
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    }
  });

  var thumb = document.getElementById('thumbnail_template');
  thumb.parentNode.removeChild(thumb);
  thumb.id = '';

  var carousel = document.getElementById('carousel');

  for (i = 0; i < styles.length; i++) {
    var clone = thumb.cloneNode(true);

    new google.maps.Map(clone, {
      center: new google.maps.LatLng(37.77, -122.44),
      zoom: 10,
      minZoom: 10,
      maxZoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      styles: styles[i].style,
      draggable: false
    });

    carousel.appendChild(clone);

    google.maps.event.addDomListener(clone, 'click', setMapStyle(i));
  }

  setMapStyle(0)();
}

function addHeatmapData(event) {
  if (heatmapOn) {
    heatmapData.push(event.latLng);
  }
}

function setMapStyle(index) {
  return function () {
    currentStyleIndex = index;
    styled = true;

    map.setOptions({styles: styles[index].style})
    editor.setValue(JSON.stringify(styles[index].style, null, 2));
    editor.clearSelection();
    editor.scrollToLine(0);
  };
}

function getStaticMap() {
  var url = 'http://maps.googleapis.com/maps/api/staticmap?sensor=false&size=640x640&scale=2'
    + '&center=' + map.getCenter().lat() + ',' + map.getCenter().lng()
    + '&zoom=' + map.getZoom();

  // Iterate over each fo the style diretive objects.
  for (var i = 0; i < styles[currentStyleIndex].style.length; i++) {
    url += '&style=';
    var style = styles[currentStyleIndex].style[i];

    // Iterate over each of the style parameters (stylers, elementType, featureType).
    for (j in style) {
      if (j == 'stylers') {
        // Iterate over each of the style parameter objects (color, hue, visibility, etc.).
        for (var k = 0; k < style[j].length; k++) {
          var styler = style[j][k];
          for (l in styler) {
            url += l + ':';
            if (l == 'color') {
              url += styler[l].replace('#', '0x');
            } else {
              url += styler[l];
            }
            url += '|';
            break; // only one prop per styler object
          }
        }
      } else {
        url += j.replace('Type', '') + ':' + style[j] + '|';
      }
    }
  }

  window.open(url, '_blank');
  window.focus();
}

var styled = false;
function toggleStyle() {
  if (styled) {
    map.setOptions({styles: null});
  } else {
    map.setOptions({styles: styles[currentStyleIndex].style});
  }

  styled = !styled;
}

var heatmapOn = false;
var heatmapIndex = -2;
function toggleHeatmap() {
  heatmapIndex++;
  if (heatmapIndex == heatmapGradients.length) {
    heatmapIndex = -2;
    heatmap.setMap(null);
    heatmapOn = false;
  } else {
    heatmap.setMap(null);
    if (heatmapIndex == -1) {
      heatmap = new google.maps.visualization.HeatmapLayer({radius: 30, opacity: 0.8});
    } else {
      heatmap = new google.maps.visualization.HeatmapLayer({gradient: heatmapGradients[heatmapIndex].gradient, radius: 30, opacity: 0.8});
    }
    heatmap.setData(heatmapData);
    heatmap.setMap(map);
    heatmapOn = true;
  }
}

var transitLayer = new google.maps.TransitLayer();
var transitOn = false;
function toggleTransit() {
  if (transitOn) {
    transitLayer.setMap(null);
  } else {
    transitLayer.setMap(map);
  }

  transitOn = !transitOn;
}

var marker;
function toggleMarker() {
  if (marker) {
    marker.setMap(null);
    marker = null;
  } else {
    marker = new google.maps.Marker({
      position: map.getCenter(),
      map: map
    });
  }
}

