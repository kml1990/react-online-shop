export const getFilteredProducts = (products, sort) => {
  if (products.length) {
    let sortedProduts = [];
    if (sort.value === 'price-desc') {
      sortedProduts = products.sort(function(a, b) {
        return b.price - a.price;
      });
    } else if (sort.value === 'price-asc') {
      sortedProduts = products.sort(function(a, b) {
        return a.price - b.price;
      });
    } else if (sort.value === 'title-desc') {
      sortedProduts = products.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else if (sort.value === 'title-asc') {
      sortedProduts = products.sort((a, b) => (a.title < b.title ? 1 : -1));
    }
    return sortedProduts;
  }

  return [];
};
