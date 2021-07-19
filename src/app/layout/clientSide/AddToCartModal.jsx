import React from 'react';
import { Button, Header, HeaderSubheader, Segment } from 'semantic-ui-react';
import Modal from '../../../features/modals/Modal';

function AddToCartModal(props) {
  return (
    <Modal onClose={props.onClose}>
      <Segment.Group>
        <Segment piled>
          <Header>Confirmation!</Header>
          <HeaderSubheader>Item name</HeaderSubheader>
        </Segment>
        <Segment clearing>
          <Button basic floated='right' color='teal' content='Add To Cart' />
          <Button
            onClick={props.onClose}
            basic
            floated='right'
            color='red'
            content='Cancel'
          />
        </Segment>
      </Segment.Group>
    </Modal>
  );
}

export default AddToCartModal;
