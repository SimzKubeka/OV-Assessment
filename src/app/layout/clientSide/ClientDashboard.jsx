import React from 'react';
import { Grid } from 'semantic-ui-react';
import SideBar from '../../../features/bars/side/SideBar';
import ProductList from '../../../features/products/productList/ProductList';

function ClientDashboard(props) {
  return (
    <Grid>
      <Grid.Column width={5}>
        <SideBar />
      </Grid.Column>
      <Grid.Column width={11}>
        <h3>Product Lists</h3>
        <ProductList onAdd={props.onShowModal} />
      </Grid.Column>
    </Grid>
  );
}

export default ClientDashboard;