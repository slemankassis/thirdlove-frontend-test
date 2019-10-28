const removeDuplicatesArray = (array) => {
  const uniqueSet = new Set(array);
  return [...uniqueSet];
};

export { removeDuplicatesArray };
