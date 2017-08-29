const StickyBar = require('../index');
const expect = require('expect');
const { shallow } = require('enzyme');
const React = require('react');

describe('<StickyBar />', () => {
  it('renders', () => {
    const renderedComponent = shallow(
      <StickyBar foo="bar" />
    );

    expect(renderedComponent.props().foo).toEqual('bar');
  });
});
