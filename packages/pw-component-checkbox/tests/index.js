import Checkbox from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

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
});
