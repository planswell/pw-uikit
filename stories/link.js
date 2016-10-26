import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Link from '../packages/pw-component-link';

storiesOf('Link', module)
  .add('default', () => (
    <Link href="#">Click Me!</Link>))
  .add('button style', () => (
    <Link button>Click Me!</Link>))
  .add('react-router link', () => (
    <Link to="/">Click Me!</Link>));
