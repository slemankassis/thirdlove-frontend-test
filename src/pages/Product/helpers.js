import {
  COLOR_VARIANTS,
  SIZE_VARIANTS,
  QTY_CHARS_FOR_BAND_SIZES,
  ID,
  PRICE,
  STOCK,
  THUMBNAIL,
  ORIGINAL_LARGE,
  COLORS,
  NUMBER_OF_ATTRS_VARIANTS,
  MIN_STOCK,
} from './Constants';

const getColorFiltersFromVariants = (variants) => {
  const colorFilters = new Set();
  variants.forEach((variant) => {
    colorFilters.add(variant.color);
  });
  return [...colorFilters];
};

const transformImages = (images) => (
  images.reduce((transformedImages, image) => (
    transformedImages.concat({
      thumbnail: `https://${image[THUMBNAIL]}`,
      original: `https://${image[ORIGINAL_LARGE]}`,
    })
  ), [])
);

// TODO: Make friendly this func
const variantHasValidData = (variant) => (
  Object.values(variant).length === NUMBER_OF_ATTRS_VARIANTS
);

const variantHasStock = (variant) => (variant[STOCK] >= MIN_STOCK);

// Transform keys and remove invalid elements
const transformVariants = (variants) => (
  variants.reduce((transformedVariants, variant) => (
    (variantHasStock(variant) && variantHasValidData(variant))
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

// TODO: Make generic with n filters
const getVariant = ({
  variants,
  color,
  band,
  cup,
}) => (
  variants && variants.find((variant) => (
    (!color || variant.color === color)
      && (!band || variant.band === band)
      && (!cup || variant.cup === cup)
  ))
);

const getColorsInHex = (colorsArray) => colorsArray.map((color) => COLORS[color]);

export {
  transformImages,
  transformVariants,
  getVariant,
  getColorsInHex,
  getColorFiltersFromVariants,
};
