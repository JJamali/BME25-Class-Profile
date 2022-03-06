"""
cleaning raw data set
"""

import pandas as pd
import numpy as np

fileName = "raw_coop1.csv"
fileExportName = fileName[4:]

df = pd.read_csv('data/datasets/' + fileName)

df.to_csv('data/datasets/' + fileExportName)