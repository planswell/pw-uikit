import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Textarea from '../components/textarea';

storiesOf('Textarea', module)
  .add('default', () => (
    <Textarea name="test" placeholder="Enter text here" />
  ));
