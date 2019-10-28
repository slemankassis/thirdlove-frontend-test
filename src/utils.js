import DOMPurify from 'dompurify';
import React from 'react';

const removeDuplicatesArray = (array) => {
  const uniqueSet = new Set(array);
  return [...uniqueSet];
};

const sanitizeHtml = (html, allowedTags) => {
  const params = allowedTags ? { ALLOWED_TAGS: allowedTags } : {};
  return (
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html, params) }} />
  );
};

export { removeDuplicatesArray, sanitizeHtml };
