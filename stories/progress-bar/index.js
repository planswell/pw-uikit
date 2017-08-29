const React = require('react');
const { storiesOf } = require('@kadira/storybook');
const ProgressBar = require('../../components/progress-bar');
const styles = require('./styles.css');
const cssModules = require('react-css-modules');

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
