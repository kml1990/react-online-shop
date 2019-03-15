import * as React from 'react';

import { Col, Card, CardImg, CardBody, Button } from 'reactstrap';

export class ProductListingItem extends React.Component {
  constructor() {
    super();
  }
  onAddToCartClicked = (id, title, price, inCart) => {
    this.props.addToCart(id, title, price, inCart);
  };

  onRemoveFromCartClicked = id => {
    this.props.removeFromCart(id);
  };

  render() {
    const { id, title, image, price, inCart } = this.props;
    return (
      <Col sm="4">
        <Card className="productListing">
          <CardImg
            className="productListing__image"
            top
            width="100%"
            src={image}
            alt="Card image cap"
          />
          <CardBody className="productListing__details">
            <span className="productListing__name mb-2">{title}</span>
            <span className="productListing__price">£{price}</span>
            <div className="productListing__actions">
              {!inCart ? (
                <Button
                  className="bg-red"
                  onClick={() =>
                    this.onAddToCartClicked(id, title, price, inCart)
                  }
                >
                  Add Item
                </Button>
              ) : (
                <Button
                  className="bg-red"
                  onClick={() => this.onRemoveFromCartClicked(id)}
                >
                  Remove Item
                </Button>
              )}
              <Button className="bg-grey">Quick View</Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
