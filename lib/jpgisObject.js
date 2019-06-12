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

const gmCurve2LineStringObject = (gmCurve, pointObject) => {
  const lineObject = {}
  gmCurve.forEach(curve => {
    const curveId = curve['$']['id']
    const curveElementArray =
      curve['jps:segment'][0]['jps:GM_LineString'][0]['jps:controlPoint'][0][
        'jps:column'
      ]
    const lineElementArray = []
    curveElementArray.forEach(element => {
      const id = element['jps:indirect'][0]['jps:point'][0]['$']['idref']
      lineElementArray.push(pointObject[id])
    })

    lineObject[curveId] = lineElementArray
  })
  Object.keys(lineObject).forEach(key => {
    const reversedKey = '_' + key
    lineObject[reversedKey] = lineObject[key].slice().reverse()
  })
  return lineObject
}

module.exports = {
  gmPoint2PointObject: gmPoint2PointObject,
  gmCurve2LineStringObject: gmCurve2LineStringObject
}
