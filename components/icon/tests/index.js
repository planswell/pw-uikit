const Icon = require('../index');
const expect = require('expect');
const { shallow } = require('enzyme');
const React = require('react');

describe('<Icon />', () => {
  it('renders check icons', () => {
    const renderedComponent = shallow(
      <Icon name="check" />
    );

    expect(renderedComponent.containsMatchingElement(
      <i className="icon icon-check" />
    )).toEqual(true);
  });
});
