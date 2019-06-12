const helpers = require('@turf/helpers')

const searchCoordinateSystem = xmlObj => {
  const genbaInfo = xmlObj['jsima:GI']['jsima:dataset'][0]['jsima:GenbaJoho'][0]
  const coordinateSystem = genbaInfo['jsima:CoordinateSystem'][0]
  const crs = genbaInfo['jsima:Crs'][0]
  return {
    coordinateSystem: coordinateSystem,
    crs: crs
  }
}

const chibanIntoProperties = (kakuchiArray, polygonObject) => {
  const namedPolygonObject = {}
  kakuchiArray.forEach(kakuchi => {
    const id = kakuchi['$']['id']
    const name = kakuchi['jsima:Name'][0]
    const refSurface = kakuchi['jsima:RefSurface'][0]['$']['idref']

    namedPolygonObject[id] = JSON.parse(
      JSON.stringify(polygonObject[refSurface])
    )
    namedPolygonObject[id].properties['kakuchiId'] = id
    namedPolygonObject[id].properties['chiban'] = name
  })
  return namedPolygonObject
}

const areaIntoProperties = (chibanArray, polygonObject) => {
  const areadPolygonObject = {}
  chibanArray.forEach(chiban => {
    const id = chiban['$']['id']
    let oaza = null
    if (chiban['jsima:OAza']) {
      oaza = chiban['jsima:OAza'][0]
    }

    let aza = null
    if (chiban['jsima:Aza']) {
      aza = chiban['jsima:Aza'][0]
    }

    let sArea = null
    if (chiban['jsima:Area']) {
      sArea = chiban['jsima:Area'][0]
    }

    let kArea = null
    if (chiban['jsima:KArea']) {
      kArea = chiban['jsima:KArea'][0]
    }

    const refKakuchi = chiban['jsima:RefKakuchi'][0]['$']['idref']

    areadPolygonObject[id] = JSON.parse(
      JSON.stringify(polygonObject[refKakuchi])
    )
    areadPolygonObject[id].properties['oaza'] = oaza
    areadPolygonObject[id].properties['aza'] = aza
    areadPolygonObject[id].properties['surveyArea'] = sArea
    areadPolygonObject[id].properties['kouboArea'] = kArea
    areadPolygonObject[id].properties['chibanId'] = id
  })
  return areadPolygonObject
}

const polygonObject2GeoJSON = polygonObject => {
  const featureArray = []
  Object.keys(polygonObject).forEach(key => {
    featureArray.push(polygonObject[key])
  })
  const featureCollection = helpers.featureCollection(featureArray)
  return featureCollection
}

module.exports = {
  searchCoordinateSystem: searchCoordinateSystem,
  chibanIntoProperties: chibanIntoProperties,
  areaIntoProperties: areaIntoProperties,
  polygonObject2GeoJSON: polygonObject2GeoJSON
}
