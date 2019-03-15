import React from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge
} from 'reactstrap';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getTotalPrice } from '../selectors/getTotalPrice';

class AppHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">
            <img
              width="auto"
              height="30"
              src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png"
              alt="logo"
              style={{ opacity: 0.7 }}
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="text-red mr-5" href="">
                  <FontAwesomeIcon icon="shopping-cart" />
                  <span className="ml-2 mr-2 text-secondary">
                    £{this.props.total}
                  </span>
                  <Badge className="bg-red" pill>
                    {this.props.shoppingCart.length}
                  </Badge>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-red ml-5" href="">
                  <FontAwesomeIcon icon="bars" />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
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
)(AppHeader);
