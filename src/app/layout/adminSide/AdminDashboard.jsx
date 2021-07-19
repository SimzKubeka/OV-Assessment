import React from 'react';
import { Grid } from 'semantic-ui-react';
import SideBar from '../../../features/bars/side/SideBar';
import ProductStatusListItem from '../../../features/products/productStatusList/ProductStatusListItem';

function AdminDashboard(props) {
  return (
    <Grid>
      <Grid.Column width={4}>
        <SideBar isClient={false} />
      </Grid.Column>
      <Grid.Column width={12}>
        <h3>All Product</h3>
        <ProductStatusListItem />
      </Grid.Column>
    </Grid>
  );
}

export default AdminDashboard;
