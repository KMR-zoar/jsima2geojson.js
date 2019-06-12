const searchCoordinateSystem = xmlObj => {
  const genbaInfo = xmlObj['jsima:GI']['jsima:dataset'][0]['jsima:GenbaJoho'][0]
  const coordinateSystem = genbaInfo['jsima:CoordinateSystem'][0]
  const crs = genbaInfo['jsima:Crs'][0]
  return {
    coordinateSystem: coordinateSystem,
    crs: crs
  }
}

module.exports = searchCoordinateSystem
