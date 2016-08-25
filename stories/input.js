import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from './../packages/pw-component-input';

storiesOf('Input', module)
  .add('default', () => (
    <Input />))
  .add('with value', () => (
    <Input value="something" readOnly />))
  .add('with placeholder', () => (
    <Input placeholder="placeholder text" />));
