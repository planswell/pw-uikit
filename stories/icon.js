const React = require('react');
const { storiesOf } = require('@kadira/storybook');
const Icon = require('../components/icon');

storiesOf('Icon', module)
  .add('envelope', () => <Icon name="envelope" />)
  .add('error', () => <Icon name="error" />)
  .add('credit-card', () => <Icon name="credit-card" />)
  .add('handset', () => <Icon name="handset" />)
  .add('hand-and-coin', () => <Icon name="hand-and-coin" />)
  .add('chat-bubble', () => <Icon name="chat-bubble" />)
  .add('money-bag', () => <Icon name="money-bag" />)
  .add('bullet-point', () => <Icon name="bullet-point" />)
  .add('finance-details', () => <Icon name="finance-details" />)
  .add('coin-up-arrow', () => <Icon name="coin-up-arrow" />)
  .add('house', () => <Icon name="house" />)
  .add('left-arrow-circle', () => <Icon name="left-arrow-circle" />)
  .add('mortarboard', () => <Icon name="mortarboard" />)
  .add('smile', () => <Icon name="smile" />)
  .add('check', () => <Icon name="check" />)
  .add('umbrella', () => <Icon name="umbrella" />)
  .add('arrow', () => <Icon name="arrow" />)
  .add('check-in-circle', () => <Icon name="check-in-circle" />)
  .add('cross', () => <Icon name="cross" />)
  .add('three-line-menu', () => <Icon name="three-line-menu" />)
  ;
