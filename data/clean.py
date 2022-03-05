"""
cleaning raw data set
"""

import pandas as pd
import numpy as np

df = pd.read_csv('data/datasets/raw_1AB.csv')

print(df.shape)
print(df.columns)