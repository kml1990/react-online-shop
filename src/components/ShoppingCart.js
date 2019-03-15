import React from 'react';
import { connect } from 'react-redux';
import { getTotalPrice } from '../selectors/getTotalPrice';

import {
  Row,
  Col,
  Jumbotron,
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Badge
} from 'reactstrap';

class ShoppingCart extends React.Component {
  productToProductItem = product => {
    const { id, title, price } = product;
    return (
      <ListGroupItem
        key={id}
        className="justify-content-between shopingCart__item"
      >
        <span className="shopingCart__itemName">{title}</span>
        <span className="shopingCart__itemPrice">£{price}</span>
      </ListGroupItem>
    );
  };

  render() {
    return (
      <Card className="shoppingCart">
        <CardBody>
          <CardTitle>
            CART{' '}
            <Badge className="bg-red" pill>
              {this.props.shoppingCart.length}
            </Badge>
          </CardTitle>
          <hr />
          <ListGroup className="mb-5 shopingCart">
            {this.props.shoppingCart.length ? (
              this.props.shoppingCart.map(this.productToProductItem)
            ) : (
              <ListGroupItem className="justify-content-between">
                No items added
              </ListGroupItem>
            )}
          </ListGroup>

          <Jumbotron className="total bg-grey mb-0 p-1">
            <Row>
              <Col sm="7">
                <div className="font-weight-bold">Total</div>
                <span style={{ fontSize: '0.7em' }}>
                  Inc. £{(this.props.total * 0.2).toFixed(2)} in taxes
                </span>
              </Col>
              <Col sm="5" className="text-right">
                <span className="font-weight-bold">£{this.props.total}</span>
              </Col>
            </Row>
          </Jumbotron>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    shoppingCart: state.app.shoppingCart,
    total: getTotalPrice(state.app.shoppingCart)
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
