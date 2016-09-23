import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Icon from './../packages/pw-component-icon';

storiesOf('Icon', module)
  .add('check', () => (
    <Icon name="check" />))
  .add('flag', () => (
    <Icon name="flag" />))
  .add('dollar', () => (
    <Icon name="dollar" />))
  .add('globe', () => (
    <Icon name="globe" />))
  ;
