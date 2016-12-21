import Dropdown from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

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
    const renderedComponent = shallow(
      <Dropdown values={values} />
    );

    expect(renderedComponent.containsMatchingElement(<option value={values[0].label} >{values[0].label}</option>)).toEqual(true);
  });
});
