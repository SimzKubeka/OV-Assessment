import React from 'react';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';

const SideBar = () => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='wide'
    >
      <Menu.Item>
        <Icon name='thumbtack' />
        All Products
      </Menu.Item>
      <Menu.Item>
        <Icon name='bullseye' />
        My Orders
      </Menu.Item>
    </Sidebar>
  </Sidebar.Pushable>
);

export default SideBar;
