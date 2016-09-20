import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ProgressBar from '../../packages/pw-component-progress-bar';
import styles from './styles.css';
import cssModules from 'react-css-modules';

storiesOf('ProgressBar', module)
  .add('Light (default)', cssModules(() => (
    <div styleName="bg-aqua">
      <ProgressBar value={0.5} />
    </div>
  ), styles))
  .add('Dark', cssModules(() => (
    <ProgressBar dark value={0.7} />
  ), styles))
  .add('With Children', cssModules(() => (
    <ProgressBar dark value={0.3}>
      <p>Foobar! <strong>Baz!</strong></p>
    </ProgressBar>
  ), styles));
