import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Button, Item, Segment } from 'semantic-ui-react';

const RETRIEVE_PRODUCTS = gql`
  query GetAllProducts {
    products {
      id
      name
      imageUrl
      description
      status
    }
  }
`;

function ProductStatusListItem(props) {
  const { loading, error, data } = useQuery(RETRIEVE_PRODUCTS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return data.products.map(({ id, name, imageUrl, description, status }) => (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item key={id}>
            <Item.Image size='tiny' src={imageUrl} alt='Product' />
            <Item.Content>
              <Item.Header content={name} />
              <Item.Description>{description}</Item.Description>
              <Item.Extra>{status}</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment clearing>
        <Button inverted color='blue' floated='right' content='Change Status' />
      </Segment>
    </Segment.Group>
  ));
}

export default ProductStatusListItem;
