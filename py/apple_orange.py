#!/bin/python

import math
import os
import random
import re
import sys


def countApplesAndOranges(s, t, a, b, apples, oranges):
    apples = sum([s <= a + x <= t for x in apples])
    oranges = sum([s <=  a + x <= t for x in oranges])
    print(apples)
    print(oranges)

s = 7
t = 11

a = 5
b = 15

apples =  [-2, 3, 1]
oranges = [5,-6]

countApplesAndOranges(s, t, a, b, apples, oranges)