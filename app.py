from flask import Flask, render_template,jsonify
import pickle
import bz2
import requests
from datetime import date
import numpy as np
from sklearn.preprocessing import StandardScaler

date = date.today().strftime("%Y-%m-%d")
app = Flask(__name__,template_folder='./template',static_folder='./static')
s=StandardScaler()
@app.route('/')
def homePage():
    return render_template('index.html')
@app.route('/predict.html')
def predict():
    return render_template('predict.html')


R_pickle_in = bz2.BZ2File('./regression.pkl', 'rb')
model= pickle.load(R_pickle_in)
    
@app.route('/api/predict', methods=['GET','POST'])
def predict_api():
   
    weather=(requests.get(f'http://api.weatherapi.com/v1/current.json?key=302ef7ffae9443af9b7171520241902&q={lat},{lon}&aqi=no'))
    # modis=modis.split("\n")[1].split(",")
    # l=[modis[1],modis[2],modis[6].split("-")[1],modis[3],modis[4],modis[7],modis[12],modis[14]]
    # l = np.array(l)
    data = weather.get_json()
    l=[35,10,44,47,2]
    l = [np.array(l)]
    # data=s.transform(l)

    # Preprocess the data if needed
    # Make predictions using the loaded model
    predictions = model.predict(l)
    # # Return the predictions as a JSON response
    print(predictions)
    return "-1"


if __name__ == '__main__':
    # modis=requests.get(f'https://firms.modaps.eosdis.nasa.gov/api/country/csv/0f2d0c92011b4de12d669b621fcc535c/VIIRS_NOAA20_NRT/IND/1/{date}')
    app.run()
    # print(requests.get("http://127.0.0.1:5000/api/predict").json())