import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Modal from '../components/modal';

storiesOf('Modal', module)
  .add('modal', () => <Modal isOpen onClose={() => null} >Hello Modal</Modal>);
