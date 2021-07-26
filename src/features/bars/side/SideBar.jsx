import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class SideBar extends Component {
  state = { activeItem: 'all products' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const isClient = true;
    if (isClient) {
      return (
        <Menu color='teal' inverted pointing vertical>
          <Menu.Item
            name='all products'
            active={activeItem === 'all products'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='my orders'
            active={activeItem === 'my orders'}
            onClick={this.handleItemClick}
          />
        </Menu>
      );
    } else {
      return (
        <Menu inverted pointing vertical>
          <Menu.Item
            name='my products'
            active={activeItem === 'my products'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='add products'
            active={activeItem === 'add products'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='orders'
            active={activeItem === 'orders'}
            onClick={this.handleItemClick}
          />
        </Menu>
      );
    }
  }
}
