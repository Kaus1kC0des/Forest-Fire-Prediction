import pickle
import os
import numpy as np

# print(np.__version__)

with open("Machine Learning/final_model.pkl", "rb") as f:
    model = pickle.load(f)


print(type(model))