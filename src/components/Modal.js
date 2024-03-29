import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const FavModal = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () =>  {
    setModal(!modal);
  }

  const favoritesList = props.list.map((item) => {
    return (
      <ListItem key={item} item={item} />
    );
  })

  return (
    <div>
      <Button outline color="secondary" onClick={toggle}><i className="fa fa-star"></i> Favorites</Button>
      <Modal isOpen={modal} toggle={toggle} className='modalbody'>
        <ModalHeader toggle={toggle}>My Favorites List</ModalHeader>
        <ModalBody>
          <ul>
            {favoritesList}
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
const ListItem = (props) => {
  return <li>{props.item}</li>;
}
export default FavModal;