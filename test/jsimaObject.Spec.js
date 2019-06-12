const assert = require('assert')
const jsima = require('../lib/jsimaObject')
const getEPSG = require('../lib/coordinateSystem')

const xmlObj = require('./data/dummy.json')
const polygonObject = require('./data/polygonObject.json')

describe('XMLを変換したJSONから測地系を取得する', () => {
  it('ダミーファイルから取得', () => {
    const content = JSON.stringify({
      coordinateSystem: '9',
      crs: '2'
    })
    const result = jsima.searchCoordinateSystem(xmlObj)
    assert.equal(content, JSON.stringify(result))
  })
  it('ダミーファイルからEPSGコードを取得', () => {
    const content = '6677'
    const coord = jsima.searchCoordinateSystem(xmlObj)
    const result = getEPSG[coord.crs][coord.coordinateSystem]
    assert.equal(content, result)
  })

  const simaObj = xmlObj['jsima:GI']['jsima:dataset'][0]['jsima:object'][0]
  const namedPolygonObject = jsima.chibanIntoproperties(
    simaObj['jsima:Kakuchi'],
    polygonObject
  )
  it('名前付きポリゴンの作成', () => {
    const contentObject = require('./data/namedObject.json')
    const content = JSON.stringify(contentObject)
    assert.equal(content, JSON.stringify(namedPolygonObject))
  })
})
