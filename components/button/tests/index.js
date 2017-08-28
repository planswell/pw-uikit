const Button = require('../index');
const expect = require('expect');
const { shallow } = require('enzyme');
const React = require('react');

describe('<Button />', () => {
  it('renders', () => {
    const renderedComponent = shallow(
      <Button />
    );

    expect(renderedComponent.hasClass('default')).toBe(true);
    expect(renderedComponent.props().type).toEqual('button');
  });
});
