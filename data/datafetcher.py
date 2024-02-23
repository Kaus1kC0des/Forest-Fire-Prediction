import requests
import csv


for i in range(1,32):
    if i<10:
        data = requests.get("https://firms.modaps.eosdis.nasa.gov/api/country/csv/0f2d0c92011b4de12d669b621fcc535c/VIIRS_NOAA20_NRT/IND/1/2024-01-0{i}")
    else:
        data = requests.get(
            "https://firms.modaps.eosdis.nasa.gov/api/country/csv/0f2d0c92011b4de12d669b621fcc535c/VIIRS_NOAA20_NRT/IND/1/2024-01-{i}")
    # Save it into a pandas dataframe
