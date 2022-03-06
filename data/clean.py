"""
cleaning raw data set
"""

import pandas as pd
import numpy as np

df = pd.read_csv('data/datasets/raw_1AB.csv')

df.to_csv('data/datasets/1AB.csv')