import React from 'react';
import ProductListItem from './ProductListItem';

function ProductList(props) {
  return (
    <>
      <ProductListItem onAddClicked={props.onAdd} />
    </>
  );
}

export default ProductList;
