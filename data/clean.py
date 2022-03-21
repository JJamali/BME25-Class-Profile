"""
cleaning raw data set
"""

import pandas as pd
import numpy as np

fileName = "raw_1AB.csv"
fileExportName = fileName[4:]

df = pd.read_csv('data/datasets/' + fileName)
print(len(df.index))

df.to_csv('data/datasets/' + fileExportName)