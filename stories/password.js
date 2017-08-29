const React = require('react');
const { storiesOf } = require('@kadira/storybook');
const Password = require('../components/showable-password');

storiesOf('Password', module)
  .add('default', () => (
    <Password />))
  .add('default with tabIndex -1', () => (
    <Password tabIndex={-1} />))
  .add('with placeholder', () => (
    <Password placeholder="placeholder text" />))
  .add('with filled in value', () => (
    <Password value="something" />))
  .add('with filled in value and displaying password', () => (
    <Password value="something" showing />));
