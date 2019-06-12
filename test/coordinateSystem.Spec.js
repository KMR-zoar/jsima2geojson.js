const assert = require('assert')
const getEPSG = require('../lib/coordinateSystem')

describe('世界測地と座標系からEPSGコード番号に変換', () => {
  it('世界測地2000 1系 → 2443', () => {
    const result = getEPSG['1']['1']
    const content = '2443'
    assert.equal(content, result)
  })
  it('世界測地2000 2系 → 2444', () => {
    const result = getEPSG['1']['2']
    const content = '2444'
    assert.equal(content, result)
  })
  it('世界測地2000 3系 → 2445', () => {
    const result = getEPSG['1']['3']
    const content = '2445'
    assert.equal(content, result)
  })
  it('世界測地2000 4系 → 2446', () => {
    const result = getEPSG['1']['4']
    const content = '2446'
    assert.equal(content, result)
  })
  it('世界測地2000 5系 → 2447', () => {
    const result = getEPSG['1']['5']
    const content = '2447'
    assert.equal(content, result)
  })
  it('世界測地2000 6系 → 2448', () => {
    const result = getEPSG['1']['6']
    const content = '2448'
    assert.equal(content, result)
  })
  it('世界測地2000 7系 → 2449', () => {
    const result = getEPSG['1']['7']
    const content = '2449'
    assert.equal(content, result)
  })
  it('世界測地2000 8系 → 2450', () => {
    const result = getEPSG['1']['8']
    const content = '2450'
    assert.equal(content, result)
  })
  it('世界測地2000 9系 → 2451', () => {
    const result = getEPSG['1']['9']
    const content = '2451'
    assert.equal(content, result)
  })
  it('世界測地2000 10系 → 2452', () => {
    const result = getEPSG['1']['10']
    const content = '2452'
    assert.equal(content, result)
  })
  it('世界測地2000 11系 → 2453', () => {
    const result = getEPSG['1']['11']
    const content = '2453'
    assert.equal(content, result)
  })
  it('世界測地2000 12系 → 2454', () => {
    const result = getEPSG['1']['12']
    const content = '2454'
    assert.equal(content, result)
  })
  it('世界測地2000 13系 → 2455', () => {
    const result = getEPSG['1']['13']
    const content = '2455'
    assert.equal(content, result)
  })
  it('世界測地2000 14系 → 2456', () => {
    const result = getEPSG['1']['14']
    const content = '2456'
    assert.equal(content, result)
  })
  it('世界測地2000 15系 → 2457', () => {
    const result = getEPSG['1']['15']
    const content = '2457'
    assert.equal(content, result)
  })
  it('世界測地2000 16系 → 2458', () => {
    const result = getEPSG['1']['16']
    const content = '2458'
    assert.equal(content, result)
  })
  it('世界測地2000 17系 → 2459', () => {
    const result = getEPSG['1']['17']
    const content = '2459'
    assert.equal(content, result)
  })
  it('世界測地2000 18系 → 2460', () => {
    const result = getEPSG['1']['18']
    const content = '2460'
    assert.equal(content, result)
  })
  it('世界測地2000 19系 → 2461', () => {
    const result = getEPSG['1']['19']
    const content = '2461'
    assert.equal(content, result)
  })
  it('世界測地2011 1系 → 6669', () => {
    const result = getEPSG['2']['1']
    const content = '6669'
    assert.equal(content, result)
  })
  it('世界測地2011 2系 → 6670', () => {
    const result = getEPSG['2']['2']
    const content = '6670'
    assert.equal(content, result)
  })
  it('世界測地2011 3系 → 6671', () => {
    const result = getEPSG['2']['3']
    const content = '6671'
    assert.equal(content, result)
  })
  it('世界測地2011 4系 → 6672', () => {
    const result = getEPSG['2']['4']
    const content = '6672'
    assert.equal(content, result)
  })
  it('世界測地2011 5系 → 6673', () => {
    const result = getEPSG['2']['5']
    const content = '6673'
    assert.equal(content, result)
  })
  it('世界測地2011 6系 → 6674', () => {
    const result = getEPSG['2']['6']
    const content = '6674'
    assert.equal(content, result)
  })
  it('世界測地2011 7系 → 6675', () => {
    const result = getEPSG['2']['7']
    const content = '6675'
    assert.equal(content, result)
  })
  it('世界測地2011 8系 → 6676', () => {
    const result = getEPSG['2']['8']
    const content = '6676'
    assert.equal(content, result)
  })
  it('世界測地2011 9系 → 6677', () => {
    const result = getEPSG['2']['9']
    const content = '6677'
    assert.equal(content, result)
  })
  it('世界測地2011 10系 → 6678', () => {
    const result = getEPSG['2']['10']
    const content = '6678'
    assert.equal(content, result)
  })
  it('世界測地2011 11系 → 6679', () => {
    const result = getEPSG['2']['11']
    const content = '6679'
    assert.equal(content, result)
  })
  it('世界測地2011 12系 → 6680', () => {
    const result = getEPSG['2']['12']
    const content = '6680'
    assert.equal(content, result)
  })
  it('世界測地2011 13系 → 6681', () => {
    const result = getEPSG['2']['13']
    const content = '6681'
    assert.equal(content, result)
  })
  it('世界測地2011 14系 → 6682', () => {
    const result = getEPSG['2']['14']
    const content = '6682'
    assert.equal(content, result)
  })
  it('世界測地2011 15系 → 6683', () => {
    const result = getEPSG['2']['15']
    const content = '6683'
    assert.equal(content, result)
  })
  it('世界測地2011 16系 → 6684', () => {
    const result = getEPSG['2']['16']
    const content = '6684'
    assert.equal(content, result)
  })
  it('世界測地2011 17系 → 6685', () => {
    const result = getEPSG['2']['17']
    const content = '6685'
    assert.equal(content, result)
  })
  it('世界測地2011 18系 → 6686', () => {
    const result = getEPSG['2']['18']
    const content = '6686'
    assert.equal(content, result)
  })
  it('世界測地2011 19系 → 6687', () => {
    const result = getEPSG['2']['19']
    const content = '6687'
    assert.equal(content, result)
  })
})
