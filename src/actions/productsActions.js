import { fetchProducts } from '../api/productsApi';

export const getProducts = () => dispatch => {
  dispatch(setProductsLoading());
  fetchProducts()
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: 'GET_PRODUCTS',
        payload: json
      });
    });
};

export const sortProducts = sort => dispatch => {
  dispatch(setProductsLoading());
  dispatch({
    type: 'FILTER_PRODUCTS',
    payload: sort
  });
};

export const setProductInCart = product => dispatch => {
  dispatch({
    type: 'SET_PRODUCT_IN_CART',
    payload: product
  });
};

export const removeProductFromCart = id => dispatch => {
  dispatch({
    type: 'REMOVE_PRODUCT_FROM_CART',
    payload: id
  });
};

export const setProductsLoading = () => {
  return {
    type: 'PRODUCTS_LOADING'
  };
};
