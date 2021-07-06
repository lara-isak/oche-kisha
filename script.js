function getLocation() {
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    console.log(long);
    console.log(lat);
  });
}

getLocation();

