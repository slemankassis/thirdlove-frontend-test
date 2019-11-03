import DOMPurify from 'dompurify';
import React from 'react';

const sanitizeHtml = (html, allowedTags) => {
  const params = allowedTags ? { ALLOWED_TAGS: allowedTags } : {};
  return (
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html, params) }} />
  );
};

const removeDuplicatesArray = (array) => [...new Set(array)];

const formatPrice = (price) => {
  const [units, cents] = price.split('.');
  return `$${units}${cents !== '00' ? `.${cents}` : ''}`;
};

const formatColor = (color) => color.split('-')[0].toUpperCase();

const getObjFromArrayByKey = (array, id) => (
  array.find((obj) => obj.id === id)
);

const swapObj = (obj) => {
  const ret = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) { // eslint-disable-line guard-for-in
    ret[obj[key]] = key;
  }
  return ret;
};

export {
  sanitizeHtml,
  removeDuplicatesArray,
  formatPrice,
  formatColor,
  getObjFromArrayByKey,
  swapObj,
};
