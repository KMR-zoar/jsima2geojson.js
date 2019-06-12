# jsima2geojson

測量データ共通フォーマット(SIMA)の JPGIS 版を GeoJSON ファイルに変換します。

SIMA データが持つ座標は日本の平面直角座標系 I ～ XIX まで対応しています。  
世界測地系座標であれば測地成果2000でも測地成果2011でも変換できますが、測地系の情報が SIMA に登録されている必要があります。

変換結果は WGS84 の緯度経度になります。

## Usage


---
2019 K'z Minor Release - Zoar