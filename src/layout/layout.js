import React from 'react';

const layoutByMaxWords = (text, maxWords) => {
  if (!text) return [''];
  let result = text.split(' ');
  const res = [];

  let stroke = '';
  for (let i = 0; i < result.length; i++) {
    stroke += result[i] + ' '
    if (i % maxWords === 0 && i !== 0) {
      res.push(stroke);
      stroke = '';
    }
  }
  res.push(stroke);

  return res;
}


const layoutByMaxStrokeLength = (text, maxStrokeLength) => {
  if (!text) return [''];
  const res = [];

  let words = text.split(' ');
  let stroke = words[0];
  for (let i = 0; i < words.length; i++) {
    if(stroke.length + words[i + 1]?.length < maxStrokeLength) {
      stroke += ' ' + words[i + 1];
    } else {
      res.push(stroke);
      stroke = words[i+ 1];
    }
  }

  return res;
}


export const formatText = (text) => {
  return layoutByMaxStrokeLength(text, 18);
}