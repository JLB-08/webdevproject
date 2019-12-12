import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const Delete = () => (

  <Modal trigger={<button>Delete</button>} basic size='small'>
    <Header icon='delete' content='Delete' />
    <Modal.Content>
      <p>
        Once delete, you will not be able to restore it again. Confirm Delete?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)

export default Delete