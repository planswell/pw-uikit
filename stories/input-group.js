const React = require('react');
const { storiesOf } = require('@kadira/storybook');
const Input = require('../components/input');
const Password = require('../components/showable-password');
const InputGroup = require('../components/input-group');

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
