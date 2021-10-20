export const PRODUCT_SORTING = 'PRODUCT_SORTING';
export const PRODUCT_BRANDS = 'PRODUCT_BRANDS';
export const PRODUCT_TAGS = 'PRODUCT_TAGS';

export function setSorting(data) {
  return {
    type: PRODUCT_SORTING,
    data,
  };
}
export function setBrands(data) {
  return {
    type: PRODUCT_BRANDS,
    data,
  };
}
export function setTag(data) {
  return {
    type: PRODUCT_TAGS,
    data,
  };
}
