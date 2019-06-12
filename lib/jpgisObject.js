const transform = require('./pointTransform')

const gmPoint2PointObject = (gmPoint, epsg) => {
  const pointObject = {}
  gmPoint.forEach(point => {
    const id = point['$']['id']
    const coordinateStr = point['jps:position'][0]['jps:coordinate'][0].split(
      ' '
    )
    // SIMAで扱われる測量座標系とGISで扱われる数学座標系はXYが逆なので入れ替えて配列を作る
    const coordinates = [
      parseFloat(coordinateStr[1]),
      parseFloat(coordinateStr[0])
    ]
    pointObject[id] = transform(coordinates, epsg)
  })
  return pointObject
}

module.exports = {
  gmPoint2PointObject: gmPoint2PointObject
}
