export const formatPriceText = (price, quantity) => {
  return quantity ? `$${(Number(price) * quantity).toFixed(2)}` : `$${price.toFixed(2)}`;
};
