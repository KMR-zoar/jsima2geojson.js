const xml2js = require('xml2js').parseString
const jpgis = require('../lib/jpgisObject')
const jsima = require('../lib/jsimaObject')
const getEPSG = require('../lib/coordinateSystem')

const xml2GeoJSON = (simaXML, callback) => {
  xml2js(simaXML, (err, simaData) => {
    if (err) throw err
    const simaObj = simaData['jsima:GI']['jsima:dataset'][0]['jsima:object'][0]

    const coordSystem = jsima.searchCoordinateSystem(simaData)
    const epsg = getEPSG[coordSystem.crs][coordSystem.coordinateSystem]

    const gmPoint = simaObj['jps:GM_Point']
    const gmCurve = simaObj['jps:GM_Curve']
    const gmSurface = simaObj['jps:GM_Surface']
    const kakuchi = simaObj['jsima:Kakuchi']
    const chiban = simaObj['jsima:Chiban']

    const pointObject = jpgis.gmPoint2PointObject(gmPoint, epsg)

    const lineObject = jpgis.gmCurve2LineStringObject(gmCurve, pointObject)

    const polygonObject = jpgis.gmSurface2polygon(gmSurface, lineObject)

    const namedPolygonObject = jsima.chibanIntoProperties(
      kakuchi,
      polygonObject
    )

    const areadPolygonObject = jsima.areaIntoProperties(
      chiban,
      namedPolygonObject
    )

    const featureCollection = jsima.polygonObject2GeoJSON(areadPolygonObject)

    callback(featureCollection)
  })
}

module.exports = xml2GeoJSON
