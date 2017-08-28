const React = require('react');
const { storiesOf } = require('@kadira/storybook');
const StickyBar = require('../components/sticky-bar');

storiesOf('StickyBar', module)
  .add('default', () => (
    <StickyBar >
      <span>HEY_O!</span>
    </StickyBar>
  ));
