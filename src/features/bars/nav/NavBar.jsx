import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/logo.png' alt='Logo' style={{ marginRight: 10 }} />
          Sims-Shop 🚀
        </Menu.Item>
        {/* <Menu.Item as={NavLink} to='/clientside'>
          Products
        </Menu.Item> */}
        <Menu.Item as={NavLink} to='/adminside' position='right'>
          <Button basic inverted content='Admin Portal' />
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default NavBar;
