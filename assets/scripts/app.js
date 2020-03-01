let map;
// zoom level
//  1 : World
// 5: Landmass/continent
// 10: City
// 15: Streets
// 20: Buildings
const zoom = 9;

// locations
const Linz = { lat: 48.30639, lng: 14.28611 };
const Wels = { lat: 48.16667, lng: 14.03333 };
const Hofkirchen = { lat: 48.483839, lng: 13.808452 };
const Rohrbach = { lat: 48.569687, lng: 13.989812 };

// init and display map
function initMap() {
  // map options
  const options = {
    zoom: zoom,
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
  // add markers to the map on click event
  google.maps.event.addListener(map, 'click', event => {
    console.log(event.latLng);
    addMarker({ coords: event.latLng });
  });
  // create some locations as test data
  addMarkerWithInfoWindow();
  addFavoritePlaces();
}

// Add marker with different icon and infoWindow
function addMarkerWithInfoWindow() {
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

// add some test data with different properties
function addFavoritePlaces() {
  // array with test data
  const favoritePlaces = [
    {
      coords: Hofkirchen,
      iconImage:
        'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    },
    {
      coords: Rohrbach,
      content: '<p>In <strong>Rohrbach</strong> I went to school</p>'
    }
  ];
  // create markers
  favoritePlaces.forEach(place => addMarker(place));
}

// function for adding markers to the map
function addMarker(props) {
  let marker = new google.maps.Marker({
    position: props.coords,
    map: map
  });

  if (props.iconImage) {
    marker.setIcon(props.iconImage);
  }

  if (props.content) {
    let infoWindow = new google.maps.InfoWindow({
      content: props.content
    });

    marker.addListener('click', e => {
      infoWindow.open(map, marker);
    });

    marker.addListener('mouseover', e => {
      const plainText = props.content.replace(/<[^>]*>?/gm, '');
      marker.setTitle(plainText.substring(0, 10) + '...');
    });
  }
}
