import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const FavModal = () => {


  const [modal, setModal] = useState(false);

  const toggle = () =>  {
    setModal(!modal);
  }

  return (
    <div>
      <Button color="info" onClick={toggle}>My Favorites</Button>
      <Modal isOpen={modal} toggle={toggle} className='modalbody'>
        <ModalHeader toggle={toggle}>My Favorites List</ModalHeader>
        <ModalBody>
          <ul>
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Save</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default FavModal;