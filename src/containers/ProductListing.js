import React from 'react';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';

import {
  setProductInCart,
  removeProductFromCart
} from '../actions/productsActions';

import { ProductListingItem } from '../components/ProductListingItem';

class ProductListing extends React.Component {
  addProductToCart = (id, title, price, inCart) => {
    const product = { id, title, price, inCart };
    this.props.setProductInCart(product);
  };

  removeProductFromCart = id => {
    this.props.removeProductFromCart(id);
  };

  productToProductItem = product => {
    const { id, title, image, price, inCart } = product;
    return (
      <ProductListingItem
        key={id}
        id={id}
        title={title}
        image={image}
        price={price}
        inCart={inCart}
        addToCart={this.addProductToCart}
        removeFromCart={this.removeProductFromCart}
      />
    );
  };

  render() {
    return <Row>{this.props.products.map(this.productToProductItem)}</Row>;
  }
}

const mapStateToProps = state => {
  return {
    sort: state.app.sort,
    products: state.app.products,
    loading: state.app.loading
  };
};

const mapDispatchToProps = { setProductInCart, removeProductFromCart };

export const ProductListingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListing);
