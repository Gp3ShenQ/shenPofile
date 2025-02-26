export const getImage = (image: string): string => {
  return new URL(`/src/assets/${image}`, import.meta.url).href;
};
