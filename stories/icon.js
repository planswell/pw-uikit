import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Icon from './../packages/pw-component-icon';

storiesOf('Icon', module)
  .add('check', () => (
    <Icon name="check" />))
  .add('house', () => (
    <Icon name="error" />))
  .add('house', () => (
    <Icon name="house" />))
  .add('umbrella', () => (
    <Icon name="umbrella" />))
  ;
