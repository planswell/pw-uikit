const React = require('react');
const { storiesOf } = require('@kadira/storybook');
const Link = require('../components/link');

storiesOf('Link', module)
  .add('default', () => (
    <Link href="#">Click Me!</Link>))
  .add('button style', () => (
    <Link button>Click Me!</Link>))
  .add('react-router link', () => (
    <Link to="/">Click Me!</Link>));
