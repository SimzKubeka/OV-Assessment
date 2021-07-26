import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Button, Item, Segment } from 'semantic-ui-react';
import AddToCartModal from '../../../app/layout/clientSide/AddToCartModal';

const RETRIEVE_PRODUCTS = gql`
  query GetAllProducts {
    products(where: { status: ACTIVE }) {
      id
      name
      imageUrl
      description
    }
  }
`;

function ProductListItem(props) {
  const [modalShown, setModalShown] = useState(false);

  const showModalHandler = () => {
    setModalShown(true);
  };

  const hideModalHandler = () => {
    setModalShown(false);
  };

  const { loading, error, data } = useQuery(RETRIEVE_PRODUCTS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return data.products.map(({ id, name, imageUrl, description }) => (
    <Segment.Group>
      {modalShown && <AddToCartModal onClose={hideModalHandler} />}
      <Segment>
        <Item.Group key={id}>
          <Item key={id}>
            <Item.Image size='tiny' src={imageUrl} alt='Product' />
            <Item.Content>
              <Item.Header content={name} />
              <Item.Description>{description}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment clearing>
        <Button
          onClick={showModalHandler}
          color='teal'
          floated='right'
          content='Add'
        />
      </Segment>
    </Segment.Group>
  ));
}

export default ProductListItem;
