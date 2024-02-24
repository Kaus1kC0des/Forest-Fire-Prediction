from flask import Flask, render_template,jsonify,request
import random
import pickle
import bz2
import requests
from datetime import date
import numpy as np
import pandas as pd

# from sklearn.preprocessing import StandardScaler

date = date.today().strftime("%Y-%m-%d")
app = Flask(__name__,template_folder='./template',static_folder='./static')
# s=StandardScaler()
# pickle_in = bz2.BZ2File("Machine Learning/final_model.pkl", 'rb')

@app.route('/')
def homePage():
    return render_template('index.html')
@app.route('/predict.html')
def predict():
    return render_template('predict.html')

# with open("Machine Learning/final_confident_model.pkl", "rb") as f:
#     model = pickle.load(f)

R_pickle_in = bz2.BZ2File('./regression.pkl', 'rb')
model_R = pickle.load(R_pickle_in)

@app.route('/clicked', methods=['GET','POST'])
def clicked():
    location = request.args.get('location')
    # print(data)
    weather=(requests.get(f'http://api.weatherapi.com/v1/current.json?key=302ef7ffae9443af9b7171520241902&q={location}&aqi=no'))
    data = weather.json()
    # c=l=[float(data['current']['temp_c']),float(data["current"]["wind_kph"]),float(random.randint(30,40)),float(random.randint(20,40)),float(random.randint(1,5))]
    c=l=[float(data['current']['temp_c']),float(data["current"]["wind_kph"]),30,23,3]

    l = [np.array(l)]
    print(l)
    # s.fit(l)
    # l=s.transform(l)
    predictions = model_R.predict(l)[0]
    # print(predictions)
    final_data={"temperature":data['current']['temp_c'],
                "wind_speed":data["current"]["wind_kph"],
                "humidity":data["current"]["humidity"],
                "Content": predictions,
                "duffPercentage":c[2]}

    return final_data
@app.route('/api/predict/', methods=['GET','POST'])
def predict_api():
    # location = request.args.get('location')
    # weather=(requests.get(f'http://api.weatherapi.com/v1/current.json?key=302ef7ffae9443af9b7171520241902&q={location}&aqi=no'))
    modis=requests.get(f"https://firms.modaps.eosdis.nasa.gov/api/country/csv/0f2d0c92011b4de12d669b621fcc535c/MODIS_NRT/IND/1/2024-02-23").text
    modis=modis.split("\n")[1].split(",")
    l=[(modis[1]),(modis[2]),(modis[6].split("-")[1]),(modis[3]),(modis[13]),(modis[7]),(modis[12]),(modis[14])]
    l=pd.DataFrame({"latitude":l[0],'longitude':l[1],'month':l[2],"brightness":l[3],"frp":l[4],"acq_time":l[5],"bright_t31":l[6],"daynight":l[7]},index=[0])
    l['daynight'] = l['daynight'].map({'D': 1, 'N': 0})
    convert_dict = {
    'latitude': 'float64',
    'longitude': 'float64',
    'brightness': 'float64',
    'acq_time': 'int64',
    'bright_t31': 'float64',
    'frp': 'float64',
    'daynight': 'int64',  
    'month': 'int64',
    }
    # 'latitude','longitude','month','brightness','frp','acq_time','bright_t31','daynight'
    # Convert the data types of the columns
    df = l.astype(convert_dict)
    l = np.array(df.iloc[0])
    # data = weather.json()
    # print(data)
    # print(location)
    # l=[data['current']['temp_c'],data["current"]["wind_kph"],random.randint(30,40),random.randint(20,40),random.randint(1,5)]
    # l = [np.array(l)]
    # data=s.transform(l)
    # 'latitude', 'longitude', 'month', 'brightness', 'scan', 'acq_time', 'bright_t31', 'daynight', 'confidence'

    # Preprocess the data if needed
    # Make predictions using the loaded model
    predictions = model.predict(df)
    # # Return the predictions as a JSON response
    print(predictions)
    # const lists1 = [
    #   {
    #     forest_name: "KOLLI FOREST",
    #     Content: 12,
    #     temperature: 25,
    #     humidity: 63,
    #     windspeed: 11.2,
    #     duffPercentage: 35,
    #     image: "/static/icon/sun.png" // Placeholder image URL
    #   },
    # final_data={"temperature":data['current']['temp_c'],
    #             "wind_speed":data["current"]["wind_kph"],
    #             "humidity":data["current"]["humidity"],
    #             "Content":predictions[0],
    #             "duffPercentage":35}
    # return render_template('tn.html',)
    return "-1"

if __name__ == '__main__':
    app.run()
