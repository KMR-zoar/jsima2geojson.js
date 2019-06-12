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
  
  it('ポイントオブジェクトの作成', () => {
    const content = JSON.stringify({
      pnt000001: [139.8333333333333, 36],
      pnt000002: [139.8333333333333, 36.000090132390916],
      pnt000003: [139.8334442539458, 36.000090132339636],
      pnt000004: [139.83344425381958, 35.99999999994872],
      pnt000005: [139.8333333333333, 35.99990986760772],
      pnt000006: [139.83344425369336, 35.99990986755644],
      pnt000007: [139.83338879360798, 36.00004506618281],
      pnt000008: [139.83338879354488, 35.99995493379121]
    })
    assert.equal(content, JSON.stringify(pointObject))
  })
})
