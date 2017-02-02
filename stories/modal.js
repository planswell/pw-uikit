import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Modal from '../packages/pw-component-modal';

storiesOf('Modal', module)
  .add('modal', () => <Modal onClose={() => null} />);