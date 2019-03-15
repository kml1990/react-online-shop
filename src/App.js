import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { getProducts } from './actions/productsActions';
import { getFilteredProducts } from './selectors/getFilteredProducts';

import AppHeader from './components/AppHeader';
import AppBanner from './components/AppBanner';
import ShoppingCart from './components/ShoppingCart';
import ProductsSort from './components/ProductsSort';
import { ProductListingContainer } from '././containers/ProductListing';

class App extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  loadProductList = () => {
    if (this.props.loading === true) {
      return <h3>Loading ... </h3>;
    }

    if (!this.props.products.length) {
      return <h3>No results ... </h3>;
    }

    return <ProductListingContainer />;
  };

  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppBanner />
        <Container>
          <Row>
            <Col sm="9" className="text-right mb-4">
              <ProductsSort />
            </Col>
          </Row>
          <Row>
            <Col sm="9">{this.loadProductList()}</Col>
            <Col sm="3">
              <ShoppingCart />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

library.add(faBars, faShoppingCart);

const mapStateToProps = state => {
  return {
    products: getFilteredProducts(state.app.products, state.app.sort),
    loading: state.app.loading
  };
};

const mapDispatchToProps = { getProducts };

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
