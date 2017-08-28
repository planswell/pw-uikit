const InputGroup = require('../index');
const expect = require('expect');
const { shallow } = require('enzyme');
const React = require('react');

describe('<InputGroup />', () => {
  it('renders childrens', () => {
    const renderedComponent = shallow(
      <InputGroup>
        <input />
        <input />
      </InputGroup>
    );

    expect(renderedComponent.find('input').length).toEqual(2);
  });
});
