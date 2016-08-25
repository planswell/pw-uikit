import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Link from './../packages/pw-component-link';

storiesOf('Link', module)
  .add('default', () => (
    <Link>Test</Link>))
  .add('default - disabled', () => (
    <Link disabled>Test</Link>))
  .add('primary', () => (
    <Link type="primary">I love Phi</Link>))
  .add('primary - disabled', () => (
    <Link type="primary" disabled>Test</Link>));
