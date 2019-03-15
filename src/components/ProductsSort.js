import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { sortProducts } from '../actions/productsActions';

class ProductsSort extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onChangeSortClicked = (name, value) => {
    const sort = { name: name, value: value };
    this.props.sortProducts(sort);
  };

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret size="sm" color="link">
          {this.props.sort.name}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            onClick={() =>
              this.onChangeSortClicked('Price High - Low', 'price-desc')
            }
          >
            Price High - Low
          </DropdownItem>
          <DropdownItem
            onClick={() =>
              this.onChangeSortClicked('Price Low - High', 'price-asc')
            }
          >
            Price Low - High
          </DropdownItem>
          <DropdownItem
            onClick={() =>
              this.onChangeSortClicked('Title A - Z', 'title-desc')
            }
          >
            Title A - Z
          </DropdownItem>
          <DropdownItem
            onClick={() => this.onChangeSortClicked('Title Z - A', 'title-asc')}
          >
            Title Z - A
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

const mapStateToProps = state => {
  return {
    sort: state.app.sort
  };
};

const mapDispatchToProps = { sortProducts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsSort);
