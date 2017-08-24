import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from '../components/input';
import Password from '../components/showable-password';
import InputGroup from '../components/input-group';


storiesOf('InputGroup', module)
  .add('2 Inputs', () => (
    <InputGroup>
      <Input tabIndex={0} />
      <Input tabIndex={-1} autoFocus />
    </InputGroup>))
  .add('3 Inputs', () => (
    <InputGroup>
      <Input tabIndex={-1} autoFocus />
      <Input tabIndex={0} />
      <Input tabIndex={-2} />
    </InputGroup>))
  .add('text and password', () => (
    <InputGroup>
      <Input placeholder="email" autoFocus />
      <Password placeholder="password" />
    </InputGroup>));
