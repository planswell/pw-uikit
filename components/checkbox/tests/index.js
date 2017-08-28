const Checkbox = require('../index');
const expect = require('expect');
const { shallow } = require('enzyme');
const React = require('react');

describe('<Checkbox />', () => {
  it('renders', () => {
    const renderedComponent = shallow(
      <Checkbox label="no" />
    );

    expect(renderedComponent.containsMatchingElement(<input type="checkbox" />)).toEqual(true);
  });
  it('renders when default checked', () => {
    const rendered = shallow(
      <Checkbox label="yes" defaultChecked />
    );

    expect(rendered.containsMatchingElement(<input type="checkbox" defaultChecked />)).toEqual(true);
  });
  it('handles changes like React does for inputs', () => {
    let returns;
    const handleChange = (value, event) => (returns = { value, event });
    const rendered = shallow(<Checkbox label="yes" onChange={handleChange} />);
    const event = { target: { checked: true } };
    rendered.find('input').simulate('change', event);
    expect(returns.value).toBe(event.target.checked);
    expect(returns.event).toBe(event);
  });
});
