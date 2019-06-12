const assert = require('assert')
const transform = require('../lib/pointTransform')

describe('PointTransform 座標変換', () => {
  //引数の配列は[測量Y座標, 測量X座標]とする。
  const source = [-32836.454, -24010.239]

  const result2443 = [129.14945357532244, 32.78298929877649]
  const result2444 = [130.6494535753224, 32.78298929877649]
  const result2445 = [131.80343622056282, 35.78303749470585]
  const result2446 = [133.1494535753224, 32.78298929877649]
  const result2447 = [133.9701028872294, 35.78303749470585]
  const result2448 = [135.6367695538961, 35.78303749470585]
  const result2449 = [136.80343622056282, 35.78303749470585]
  const result2450 = [138.1367695538961, 35.78303749470585]
  const result2451 = [139.47010288722936, 35.78303749470585]
  const result2452 = [140.44997611834717, 39.78310017818246]
  const result2453 = [139.84204160261555, 43.78315624585826]
  const result2454 = [141.84204160261555, 43.78315624585826]
  const result2455 = [143.84204160261555, 43.78315624585826]
  const result2456 = [141.67258935262132, 25.782884293705134]
  const result2457 = [127.17258935262134, 25.782884293705134]
  const result2458 = [123.67258935262133, 25.782884293705134]
  const result2459 = [130.67258935262132, 25.782884293705134]
  const result2460 = [135.68661461424566, 19.78281482007599]
  const result2461 = [153.67258935262134, 25.782884293705134]
  const result6669 = [129.14945357532244, 32.78298929877649]
  const result6670 = [130.6494535753224, 32.78298929877649]
  const result6671 = [131.80343622056282, 35.78303749470585]
  const result6672 = [133.1494535753224, 32.78298929877649]
  const result6673 = [133.9701028872294, 35.78303749470585]
  const result6674 = [135.6367695538961, 35.78303749470585]
  const result6675 = [136.80343622056282, 35.78303749470585]
  const result6676 = [138.1367695538961, 35.78303749470585]
  const result6677 = [139.47010288722936, 35.78303749470585]
  const result6678 = [140.44997611834717, 39.78310017818246]
  const result6679 = [139.84204160261555, 43.78315624585826]
  const result6680 = [141.84204160261555, 43.78315624585826]
  const result6681 = [143.84204160261555, 43.78315624585826]
  const result6682 = [141.67258935262132, 25.782884293705134]
  const result6683 = [127.17258935262134, 25.782884293705134]
  const result6684 = [123.67258935262133, 25.782884293705134]
  const result6685 = [130.67258935262132, 25.782884293705134]
  const result6686 = [135.68661461424566, 19.78281482007599]
  const result6687 = [153.67258935262134, 25.782884293705134]

  const result2443str = JSON.stringify(result2443)
  const result2444str = JSON.stringify(result2444)
  const result2445str = JSON.stringify(result2445)
  const result2446str = JSON.stringify(result2446)
  const result2447str = JSON.stringify(result2447)
  const result2448str = JSON.stringify(result2448)
  const result2449str = JSON.stringify(result2449)
  const result2450str = JSON.stringify(result2450)
  const result2451str = JSON.stringify(result2451)
  const result2452str = JSON.stringify(result2452)
  const result2453str = JSON.stringify(result2453)
  const result2454str = JSON.stringify(result2454)
  const result2455str = JSON.stringify(result2455)
  const result2456str = JSON.stringify(result2456)
  const result2457str = JSON.stringify(result2457)
  const result2458str = JSON.stringify(result2458)
  const result2459str = JSON.stringify(result2459)
  const result2460str = JSON.stringify(result2460)
  const result2461str = JSON.stringify(result2461)
  const result6669str = JSON.stringify(result6669)
  const result6670str = JSON.stringify(result6670)
  const result6671str = JSON.stringify(result6671)
  const result6672str = JSON.stringify(result6672)
  const result6673str = JSON.stringify(result6673)
  const result6674str = JSON.stringify(result6674)
  const result6675str = JSON.stringify(result6675)
  const result6676str = JSON.stringify(result6676)
  const result6677str = JSON.stringify(result6677)
  const result6678str = JSON.stringify(result6678)
  const result6679str = JSON.stringify(result6679)
  const result6680str = JSON.stringify(result6680)
  const result6681str = JSON.stringify(result6681)
  const result6682str = JSON.stringify(result6682)
  const result6683str = JSON.stringify(result6683)
  const result6684str = JSON.stringify(result6684)
  const result6685str = JSON.stringify(result6685)
  const result6686str = JSON.stringify(result6686)
  const result6687str = JSON.stringify(result6687)

  it('EPSG:2443 -> EPSG:4326', () => {
    assert.equal(result2443str, JSON.stringify(transform(source, 2443)))
  })
  it('EPSG:2444 -> EPSG:4326', () => {
    assert.equal(result2444str, JSON.stringify(transform(source, 2444)))
  })
  it('EPSG:2445 -> EPSG:4326', () => {
    assert.equal(result2445str, JSON.stringify(transform(source, 2445)))
  })
  it('EPSG:2446 -> EPSG:4326', () => {
    assert.equal(result2446str, JSON.stringify(transform(source, 2446)))
  })
  it('EPSG:2447 -> EPSG:4326', () => {
    assert.equal(result2447str, JSON.stringify(transform(source, 2447)))
  })
  it('EPSG:2448 -> EPSG:4326', () => {
    assert.equal(result2448str, JSON.stringify(transform(source, 2448)))
  })
  it('EPSG:2449 -> EPSG:4326', () => {
    assert.equal(result2449str, JSON.stringify(transform(source, 2449)))
  })
  it('EPSG:2450 -> EPSG:4326', () => {
    assert.equal(result2450str, JSON.stringify(transform(source, 2450)))
  })
  it('EPSG:2451 -> EPSG:4326', () => {
    assert.equal(result2451str, JSON.stringify(transform(source, 2451)))
  })
  it('EPSG:2452 -> EPSG:4326', () => {
    assert.equal(result2452str, JSON.stringify(transform(source, 2452)))
  })
  it('EPSG:2453 -> EPSG:4326', () => {
    assert.equal(result2453str, JSON.stringify(transform(source, 2453)))
  })
  it('EPSG:2454 -> EPSG:4326', () => {
    assert.equal(result2454str, JSON.stringify(transform(source, 2454)))
  })
  it('EPSG:2455 -> EPSG:4326', () => {
    assert.equal(result2455str, JSON.stringify(transform(source, 2455)))
  })
  it('EPSG:2456 -> EPSG:4326', () => {
    assert.equal(result2456str, JSON.stringify(transform(source, 2456)))
  })
  it('EPSG:2457 -> EPSG:4326', () => {
    assert.equal(result2457str, JSON.stringify(transform(source, 2457)))
  })
  it('EPSG:2458 -> EPSG:4326', () => {
    assert.equal(result2458str, JSON.stringify(transform(source, 2458)))
  })
  it('EPSG:2459 -> EPSG:4326', () => {
    assert.equal(result2459str, JSON.stringify(transform(source, 2459)))
  })
  it('EPSG:2460 -> EPSG:4326', () => {
    assert.equal(result2460str, JSON.stringify(transform(source, 2460)))
  })
  it('EPSG:2461 -> EPSG:4326', () => {
    assert.equal(result2461str, JSON.stringify(transform(source, 2461)))
  })
  it('EPSG:6669 -> EPSG:4326', () => {
    assert.equal(result6669str, JSON.stringify(transform(source, 6669)))
  })
  it('EPSG:6670 -> EPSG:4326', () => {
    assert.equal(result6670str, JSON.stringify(transform(source, 6670)))
  })
  it('EPSG:6671 -> EPSG:4326', () => {
    assert.equal(result6671str, JSON.stringify(transform(source, 6671)))
  })
  it('EPSG:6672 -> EPSG:4326', () => {
    assert.equal(result6672str, JSON.stringify(transform(source, 6672)))
  })
  it('EPSG:6673 -> EPSG:4326', () => {
    assert.equal(result6673str, JSON.stringify(transform(source, 6673)))
  })
  it('EPSG:6674 -> EPSG:4326', () => {
    assert.equal(result6674str, JSON.stringify(transform(source, 6674)))
  })
  it('EPSG:6675 -> EPSG:4326', () => {
    assert.equal(result6675str, JSON.stringify(transform(source, 6675)))
  })
  it('EPSG:6676 -> EPSG:4326', () => {
    assert.equal(result6676str, JSON.stringify(transform(source, 6676)))
  })
  it('EPSG:6677 -> EPSG:4326', () => {
    assert.equal(result6677str, JSON.stringify(transform(source, 6677)))
  })
  it('EPSG:6678 -> EPSG:4326', () => {
    assert.equal(result6678str, JSON.stringify(transform(source, 6678)))
  })
  it('EPSG:6679 -> EPSG:4326', () => {
    assert.equal(result6679str, JSON.stringify(transform(source, 6679)))
  })
  it('EPSG:6680 -> EPSG:4326', () => {
    assert.equal(result6680str, JSON.stringify(transform(source, 6680)))
  })
  it('EPSG:6681 -> EPSG:4326', () => {
    assert.equal(result6681str, JSON.stringify(transform(source, 6681)))
  })
  it('EPSG:6682 -> EPSG:4326', () => {
    assert.equal(result6682str, JSON.stringify(transform(source, 6682)))
  })
  it('EPSG:6683 -> EPSG:4326', () => {
    assert.equal(result6683str, JSON.stringify(transform(source, 6683)))
  })
  it('EPSG:6684 -> EPSG:4326', () => {
    assert.equal(result6684str, JSON.stringify(transform(source, 6684)))
  })
  it('EPSG:6685 -> EPSG:4326', () => {
    assert.equal(result6685str, JSON.stringify(transform(source, 6685)))
  })
  it('EPSG:6686 -> EPSG:4326', () => {
    assert.equal(result6686str, JSON.stringify(transform(source, 6686)))
  })
  it('EPSG:6687 -> EPSG:4326', () => {
    assert.equal(result6687str, JSON.stringify(transform(source, 6687)))
  })
})
