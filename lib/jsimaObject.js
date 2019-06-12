const searchCoordinateSystem = xmlObj => {
  const genbaInfo = xmlObj['jsima:GI']['jsima:dataset'][0]['jsima:GenbaJoho'][0]
  const coordinateSystem = genbaInfo['jsima:CoordinateSystem'][0]
  const crs = genbaInfo['jsima:Crs'][0]
  return {
    coordinateSystem: coordinateSystem,
    crs: crs
  }
}

const chibanIntoproperties = (kakuchiArray, polygonObject) => {
  const namedPolygonObject = {}
  kakuchiArray.forEach(kakuchi => {
    const id = kakuchi['$']['id']
    const name = kakuchi['jsima:Name'][0]
    const refSurface = kakuchi['jsima:RefSurface'][0]['$']['idref']

    polygonObject[refSurface].properties['kakuchiId'] = id
    polygonObject[refSurface].properties['chiban'] = name

    namedPolygonObject[id] = polygonObject[refSurface]
  })
  return namedPolygonObject
}

module.exports = {
  searchCoordinateSystem: searchCoordinateSystem,
  chibanIntoproperties: chibanIntoproperties
}
