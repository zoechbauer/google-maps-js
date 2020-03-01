let map;
function initMap() {
  // zoom level
  //  1 : World
  // 5: Landmass/continent
  // 10: City
  // 15: Streets
  // 20: Buildings

  // map options
  const Linz = { lat: 48.30639, lng: 14.28611 };
  const options = {
    zoom: 10,
    center: Linz
  };
  // new map
  map = new google.maps.Map(document.getElementById('map'), options);
  // set marker
  const marker = new google.maps.Marker({
    position: Linz,
    map: map,
    title: 'state capital of Upper Austria'
  });

  addMarkerWithInfoWindow();
}

// Add marker with different icon and infoWindow
function addMarkerWithInfoWindow() {
  const Wels = { lat: 48.16667, lng: 14.03333 };
  const marker = new google.maps.Marker({
    position: Wels,
    map: map,
    title: 'click me for infos',
    icon:
      'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  });

  const infoWindow = new google.maps.InfoWindow({
    content:
      '<h3>Disctrict Capital of Upper Austria</h3>' +
      '<p>Wels (German pronunciation: [vɛls]) is a city in Upper Austria, on the Traun River near Linz. ' +
      'It is the county seat of Wels-Land, and with a population of approximately 60,000, the eighth largest city in Austria.</p>'
  });

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}
