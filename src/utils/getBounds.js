
const getBounds = (articleData) => {
  let lowestLat = articleData[0].location.latitude;
  let highestLat = articleData[0].location.latitude;
  let lowestLong = articleData[0].location.longitude;
  let highestLong =  articleData[0].location.longitude;
  articleData.forEach((article) => {
    const { latitude, longitude } = article.location;
    if( latitude < lowestLat) lowestLat = latitude;
    if( latitude > highestLat) highestLat = latitude;
    if( longitude < lowestLong) lowestLong = longitude;
    if( longitude > highestLong) highestLong = longitude;
  });

  return [
    [lowestLat, lowestLong],
    [highestLat, highestLong]
  ]
}

export default getBounds;