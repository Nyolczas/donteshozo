import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="A döntés"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Tedd ezt:</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearSelectedOption}>OKÉ</button>
  </Modal>
);

export default OptionModal;