---
title: 'Introduction to Statistics in Python'
date: '2025-07-21'
tags: ['math', 'machine learning']
draft: true
summary: "Statistics is the study of how to collect, analyze, and draw conclusions from data. It's a hugely valuable tool that you can use to bring the future into focus and infer the answer to tons of questions."
images: ['/static/blogs/linear-algebra.jpg']
authors: ['default']
---


Statistics is the study of how to collect, analyze, and draw conclusions from data. It's a hugely valuable tool that you can use to bring the future into focus and infer the answer to tons of questions. For example, what is the likelihood of someone purchasing your product, how many calls will your support team receive, and how many jeans sizes should you manufacture to fit 95% of the population? In this course, you'll discover how to answer questions like these as you grow your statistical skills and learn how to calculate averages, use scatterplots to show the relationship between numeric values, and calculate correlation. You'll also tackle probability, the backbone of statistical reasoning, and learn how to use Python to conduct a well-designed study to draw your own conclusions from data.

```python
import pandas as pd
import numpy as np
import warnings
import matplotlib.pyplot as plt
import matplotlib as mpl 


plt.rcParams['figure.figsize'] = [7, 5]

pd.set_option('display.expand_frame_repr', False)

warnings.filterwarnings("ignore")
```

```python
mpl.rcParams['axes.grid'] = True
plt.style.use('seaborn')
```

# Summary Statistics
Summary statistics gives you the tools you need to boil down massive datasets to reveal the highlights. In this chapter, you'll explore summary statistics including mean, median, and standard deviation, and learn how to accurately interpret them. You'll also develop your critical thinking skills, allowing you to choose the best summary statistics for your data.

## What is statistics?
**Descriptive and inferential statistics**
Statistics can be used to answer lots of different types of questions, but being able to identify which type of statistics is needed is essential to drawing accurate conclusions. In this exercise, you'll sharpen your skills by identifying which type is needed to answer each question.

Identify which questions can be answered with descriptive statistics and which questions can be answered with inferential statistics.

**Data type classification**
In the video, you learned about two main types of data:numeric and categorical. Numeric variables can be classified as either discrete or continuous, and categorical variables can be classified as either nominal or ordinal. These characteristics of a variable determine which ways of summarizing your data will work best. Map each variable to its data type by dragging each item and dropping it into the correct data type.
