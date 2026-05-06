import sys
import re
path = 'script.js'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()
# simplistic braces count
open_count = text.count('{')
close_count = text.count('}')
print('braces', open_count, close_count)
# check quotes by line
for i, line in enumerate(text.splitlines(), start=1):
    if line.count("'") % 2 != 0:
        print('odd single quote at', i, repr(line))
    if line.count('"') % 2 != 0:
        print('odd double quote at', i, repr(line))
