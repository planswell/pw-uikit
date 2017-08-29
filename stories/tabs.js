const React = require('react');
const { storiesOf } = require('@kadira/storybook');
const Tabs = require('../components/tabs');

storiesOf('Tabs', module)
  .add('tabs', () => <Tabs>
    <tab>
      <tab-label>Foo</tab-label>
      Hello!
      <div>I am Foo Tab!</div>
    </tab>
    <tab>
      <tab-label>Bar</tab-label>
      Salut!
      <div>Je suis Tab Bar!</div>
    </tab>
  </Tabs>);
