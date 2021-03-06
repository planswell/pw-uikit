const React = require('react');
const { storiesOf } = require('@kadira/storybook');
const Input = require('../components/input');

const id = () => {};

storiesOf('Input', module)
  .add('default', () => (
    <Input onChange={id} />))
  .add('with value', () => (
    <Input value="something" readOnly />))
  .add('with placeholder', () => (
    <Input placeholder="placeholder text" onChange={id} />))
  .add('with mask', () => (
    <Input mask="111-111-1111" onChange={id} />))
  .add('with invalid input', () => (
    <Input appearance="invalid" onChange={id} />));
