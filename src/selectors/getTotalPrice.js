export const getTotalPrice = products => {
  if (products.length) {
    const total = products.reduce((total, product) => {
      return total + parseFloat(product.price);
    }, 0.0);
    return total.toFixed(2);
  }
  return 0.0;
};
