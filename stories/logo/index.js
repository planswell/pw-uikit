const React = require('react');
const { storiesOf } = require('@kadira/storybook');
const Logo = require('../../components/logo');
const styles = require('./style.css');
const cssModules = require('react-css-modules');

storiesOf('Logo', module)
  .add('Default', () => (
    <Logo />
  ))
  .add('Coloured', cssModules(() => (
    <div>
      <Logo styleName="red" />
      <Logo styleName="green" />
      <Logo styleName="blue" />
      <Logo styleName="aqua" />
      <Logo styleName="purple" />
      <Logo styleName="yellow" />
    </div>)
  , styles));
