import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from './../packages/pw-component-input';
import Password from './../packages/pw-component-showable-password';
import InputGroup from './../packages/pw-component-input-group';


storiesOf('InputGroup', module)
  .add('2 Inputs', () => (
    <InputGroup>
      <Input tabIndex={2} />
      <Input tabIndex={1} autoFocus />
    </InputGroup>))
  .add('3 Inputs', () => (
    <InputGroup>
      <Input tabIndex={1} autoFocus />
      <Input tabIndex={2} />
      <Input tabIndex={3} />
    </InputGroup>))
  .add('text and password', () => (
    <InputGroup>
      <Input placeholder="email" autoFocus />
      <Password placeholder="password" />
    </InputGroup>));
