import React, { Component, createRef } from 'react';
import style from './Modal.module.css';

class Modal extends Component {
  modalRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
  }

  handleEsc = e => {
    const { onClose } = this.props;

    if (e.keyCode === 27) onClose();
  };

  handleClose = e => {
    e.preventDefault();
    const { onClose } = this.props;
    if (e.target === this.modalRef.current) onClose();
  };

  render() {
    const { url } = this.props;
    return (
      <div
        className={style.Overlay}
        onClick={this.handleClose}
        ref={this.modalRef}
      >
        <div className={style.Modal}>
          <img src={url} alt={url} />
        </div>
      </div>
    );
  }
}

export default Modal;
