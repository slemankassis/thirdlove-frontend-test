import {
  COLOR_VARIANTS,
  SIZE_VARIANTS,
  QTY_CHARS_FOR_BAND_SIZES,
  ID,
  PRICE,
  STOCK,
  THUMBNAIL,
  ORIGINAL_LARGE,
} from './Constants';

const transformImages = (images) => (
  images.reduce((transformedImages, image) => (
    transformedImages.concat({
      thumbnail: `https://${image[THUMBNAIL]}`,
      original: `https://${image[ORIGINAL_LARGE]}`,
    })
  ), [])
);

const transformVariants = (variants) => (
  variants.reduce((transformedVariants, variant) => (variant[STOCK] >= 10
    ? transformedVariants.concat({
      id: variant[ID].toString(),
      price: variant[PRICE],
      stock: variant[STOCK],
      color: variant[COLOR_VARIANTS],
      [SIZE_VARIANTS]: variant[SIZE_VARIANTS],
      band: `${variant[SIZE_VARIANTS][0]}${variant[SIZE_VARIANTS][1]}`,
      cup: variant[SIZE_VARIANTS].slice(QTY_CHARS_FOR_BAND_SIZES),
    })
    : transformedVariants
  ), [])
);

const getSelectedVariant = (variants, selectedColor, selectedBand, selectedCup) => (
  variants.find((variant) => (
    (variant.color === selectedColor)
    && (variant.band === selectedBand)
    && (variant.cup === selectedCup)
  ))
);

const getObjFromArrayByKey = (array, id) => (
  array.find((element) => element.id.toString() === id.toString())
);

export {
  transformImages,
  transformVariants,
  getSelectedVariant,
  getObjFromArrayByKey,
};