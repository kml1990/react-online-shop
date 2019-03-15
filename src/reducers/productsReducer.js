const initialState = {
  products: [],
  shoppingCart: [],
  sort: { name: 'Price High - Low', value: 'price-desc' },
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload.products.map(product => {
          const { id, title, images, variants } = product;
          const productItem = {
            id,
            title,
            image: images[0].src,
            price: variants[0].price,
            inCart: false
          };
          return productItem;
        }),
        loading: false
      };
    case 'SET_PRODUCT_IN_CART':
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          item => item.id === action.payload.id
        ).length
          ? [...state.shoppingCart]
          : [...state.shoppingCart, action.payload],
        products: state.products.map(product => {
          if (product.id === action.payload.id) {
            product.inCart = true;
          }
          return product;
        }),
        loading: false
      };
    case 'REMOVE_PRODUCT_FROM_CART':
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(item => {
          return item.id !== action.payload;
        }),
        products: state.products.map(product => {
          if (product.id === action.payload) {
            product.inCart = false;
          }
          return product;
        }),
        loading: false
      };

    case 'FILTER_PRODUCTS':
      return {
        ...state,
        sort: action.payload,
        loading: false
      };
    case 'PRODUCTS_LOADING':
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
