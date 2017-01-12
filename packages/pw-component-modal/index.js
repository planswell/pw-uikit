import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './style.css';

import BaseModal from 'react-modal';
import Icon from 'pw-component-icon';

function Modal({ isOpen, onClose, children }) {
  return (
    <BaseModal isOpen={isOpen} styleName="base" overlayClassName={styles.modalOverlay} contentLabel="Modal" >
      <button onClick={onClose} styleName="modal-close"><Icon name="cross" /></button>
      {children}
    </BaseModal>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default cssModules(Modal, styles);
