import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const FavModal = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () =>  {
    setModal(!modal);
    // console.log("ebhebfej");
  }
  const toggleSave = () =>  {
    setModal(!modal);
    // console.log("ebhebfej");
    props.handleSave();
  }

  const favoritesList = props.list.map((item) => {
    return (
      <li>{item}</li>
    );
  })

  return (
    <div>
      <Button color="info" onClick={toggle}>My Favorites</Button>
      <Modal isOpen={modal} toggle={toggle} className='modalbody'>
        <ModalHeader toggle={toggle}>My Favorites List</ModalHeader>
        <ModalBody>
          <ul>
            {favoritesList}
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleSave}>Save</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default FavModal;