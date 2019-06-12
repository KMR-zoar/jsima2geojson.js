const assert = require('assert')
const searchCoordSys = require('../lib/jsimaObject').searchCoordinateSystem
const getEPSG = require('../lib/coordinateSystem')

const xmlObj = require('./data/dummy.json')

describe('XMLを変換したJSONから測地系を取得する', () => {
  it('ダミーファイルから取得', () => {
    const content = JSON.stringify({
      coordinateSystem: '9',
      crs: '2'
    })
    const result = searchCoordSys(xmlObj)
    assert.equal(content, JSON.stringify(result))
  })
  it('ダミーファイルからEPSGコードを取得', () => {
    const content = '6677'
    const coord = searchCoordSys(xmlObj)
    const result = getEPSG[coord.crs][coord.coordinateSystem]
    assert.equal(content, result)
  })
})
