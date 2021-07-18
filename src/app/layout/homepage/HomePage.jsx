import React from 'react';
import {
  Container,
  Header,
  Segment,
  Image,
  Button,
  Icon,
} from 'semantic-ui-react';

function HomePage({ history }) {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='./assets/logo.png'
            style={{ marginBottom: 15 }}
          />
          Sims-Shop 🚀
        </Header>
        <Button
          onClick={() => history.push('/clientside')}
          size='huge'
          inverted
        >
          Start Shopping
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  );
}

export default HomePage;
