const fs = require('fs')
const iconv = require('iconv-lite')
const parse = require('./parse')

if (process.argv[2] === undefined) {
  console.log('Not enough options.')
  console.log('jsima2geojson <SIMA(JPGIS)>')
  process.exit(1)
}

const targetPath = process.argv[2]
let data = Object

try {
  data = fs.readFileSync(targetPath)
} catch (error) {
  console.error(error)
  process.exit(1)
}

const buf = new Buffer.from(data, 'binary')
const simaObj = iconv.decode(buf, 'Shift_JIS')

parse(simaObj, result => {
  const path = targetPath.replace('.xml', '.geojson')
  fs.writeFileSync(path, JSON.stringify(result))
})
