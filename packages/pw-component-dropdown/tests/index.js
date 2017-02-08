import Dropdown from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { omit } from 'lodash';

const values = [{
  label: 'travel',
  value: false,
}, {
  label: 'time with family',
  value: false,
}, {
  label: 'working on a passion',
  value: false,
}];

describe('<Dropdown />', () => {
  it('renders', () => {
    const renderedComponent = shallow(<Dropdown values={values} />);

    expect(renderedComponent.containsMatchingElement(<option value={values[0].value} >{values[0].label}</option>)).toEqual(true);
  });

  it('renders values as labels when no labels are given', () => {
    const renderedComponent = shallow(<Dropdown values={values.map(v => omit(v, ['label']))} />);

    expect(renderedComponent.containsMatchingElement(<option value={values[0].value} >{values[0].value}</option>)).toEqual(true);
  });

  it('handles changes like React does for inputs', () => {
    let returns;
    const handleChange = (value, event) => (returns = { value, event });
    const rendered = shallow(<Dropdown values={values} onChange={handleChange} />);
    const event = { target: { value: 'FOOBAR' } };
    rendered.simulate('change', event);
    expect(returns.value).toBe(event.target.value);
    expect(returns.event).toBe(event);
  });
});
