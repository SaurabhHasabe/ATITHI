let map_Token = mapToken;

const map = new mapboxgl.Map({
  accessToken: map_Token,
  container: "map",
  center: listing.geometry.coordinates, // lng,lat
  zoom: 10,
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.location}</h4><p>Exact Location Will Be Provided After Booking </p>`,
    ),
  )
  .addTo(map);
