import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Link from '../packages/pw-component-link';

storiesOf('Link', module)
  .add('default', () => (
    <Link to="/">Click Me!</Link>))
  .add('button style', () => (
    <Link button to="/">Click Me!</Link>));
