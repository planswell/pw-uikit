const React = require('react');
const { PropTypes } = React;
const cssModules = require('react-css-modules');
const styles = require('./style.css');
const BaseModal = require('react-modal');
const Icon = require('../icon');

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

module.exports = cssModules(Modal, styles);
