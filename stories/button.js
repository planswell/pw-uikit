import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from './../packages/pw-component-button';

storiesOf('Button', module)
  .add('default', () => (
    <Button>Test</Button>))
  .add('default - disabled', () => (
    <Button disabled>Test</Button>))
  .add('primary', () => (
    <Button type="primary">I love Phi</Button>))
  .add('primary - disabled', () => (
    <Button type="primary" disabled>Test</Button>))
  .add('icon - left', () => (
    <Button icon="coin-up-arrow">Log out</Button>))
  .add('icon - right', () => (
    <Button icon="coin-up-arrow" align="right">Log out</Button>
  ));
