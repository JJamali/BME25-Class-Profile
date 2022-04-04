"""
cleaning raw data set
"""

import pandas as pd
import numpy as np

fileName = "raw_1AB.csv"
fileExportName = fileName[4:]

df = pd.read_csv('data/datasets/' + fileName)
print(len(df.index))



df['likeCse'] = df['likeCse'].map(
     {'Yes': 1 , 'No':0, 'Maybe':3})

df['bAttendance'] = df['bAttendance'].map(
     {'I skipped almost every class': 0,
      'I occasionally went to class': 0.25,
      'I skipped about half of my classes': 0.5,
      'I occasionally skipped class': 0.75,
      'I attended almost every class': 1})

df['bNumCry'] = df['bNumCry'].map(
     {'None': '0',
      'Too many times to count':'10+',
      '6-10 times':'6-10',
      '11-20 times':'11-20',
      '1-5 times':'1-5'
     })

df.to_csv('data/datasets/' + fileExportName)

