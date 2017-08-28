const React = require('react');
const { storiesOf } = require('@kadira/storybook');
const Modal = require('../components/modal');

storiesOf('Modal', module)
  .add('modal', () => <Modal isOpen onClose={() => null} >Hello Modal</Modal>);
