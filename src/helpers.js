import DOMPurify from 'dompurify';
import React from 'react';

const sanitizeHtml = (html, allowedTags) => {
  const params = allowedTags ? { ALLOWED_TAGS: allowedTags } : {};
  return (
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html, params) }} />
  );
};

const removeDuplicates = (array) => [...new Set(array)];

const formatPrice = (price) => `$${price.split('.')[0]}`;

const getObjFromArrayByKey = (array, id) => (
  array.find((obj) => obj.id === id)
);

const swapObj = (obj) => {
  const ret = {};
  for (const key in obj) {
    ret[obj[key]] = key;
  }
  return ret;
};

export {
  sanitizeHtml,
  removeDuplicates,
  formatPrice,
  getObjFromArrayByKey,
  swapObj,
};
