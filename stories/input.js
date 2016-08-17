import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Input } from './../packages/pw-component-input';
import { Container } from './../packages/pw-container';

storiesOf('Input', module)
  .add('with text', () => (
    <Container>
      <Input />
    </Container>
  ))
  .add('with password', () => (
    <Container>
      <Input type="password" />
    </Container>
  ));
