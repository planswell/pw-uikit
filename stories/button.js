import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from './../packages/pw-component-button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button />
  ));
