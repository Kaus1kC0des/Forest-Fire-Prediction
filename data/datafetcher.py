import requests

data = requests.get("https://firms.modaps.eosdis.nasa.gov/api/country/csv/0f2d0c92011b4de12d669b621fcc535c/VIIRS_NOAA20_NRT/IND/1/2024-02-01")

print(data.text)