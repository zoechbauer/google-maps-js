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
  const map = new google.maps.Map(document.getElementById('map'), options);
  // set marker
  const marker = new google.maps.Marker({
    position: Linz,
    map: map,
    title: 'state capital of Upper Austria'
  });
}
