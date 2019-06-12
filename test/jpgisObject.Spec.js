const assert = require('assert')
const jpgisObject = require('../lib/jpgisObject')
const getEPSG = require('../lib/coordinateSystem')
const jsimaObject = require('../lib/jsimaObject')

const xmlObj = require('./dummy.json')

describe('JPGISオブジェクトの変換', () => {
  const simaObj = xmlObj['jsima:GI']['jsima:dataset'][0]['jsima:object'][0]
  const coord = jsimaObject.searchCoordinateSystem(xmlObj)
  const epsg = getEPSG[coord.crs][coord.coordinateSystem]

  const pointObject = jpgisObject.gmPoint2PointObject(
    simaObj['jps:GM_Point'],
    epsg
  )

  const contentPointObj = require('./data/pointObject.json')
  const contentLineObj = require('./data/lineObject.json')

  it('ポイントオブジェクトの作成', () => {
    const content = JSON.stringify(contentPointObj)
    assert.equal(content, JSON.stringify(pointObject))
  })

  const lineObject = jpgisObject.gmCurve2LineStringObject(
    simaObj['jps:GM_Curve'],
    pointObject
  )
  it('ライン地物の作成', () => {
    const content = JSON.stringify(contentLineObj)
    assert.equal(content, JSON.stringify(lineObject))
  })
})
