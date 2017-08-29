const Textarea = require('../index');
const expect = require('expect');
const { shallow } = require('enzyme');
const React = require('react');

describe('<Textarea />', () => {
  it('renders', () => {
    const renderedComponent = shallow(
      <Textarea appearance="invalid" />
    );

    expect(renderedComponent.hasClass('invalid')).toBe(true);
  });
});
