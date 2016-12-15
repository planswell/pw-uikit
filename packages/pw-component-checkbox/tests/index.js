import Checkbox from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Checkbox />', () => {
  it('renders', () => {
    const renderedComponent = shallow(
      <Checkbox label="yes" />
    );

    expect(renderedComponent.containsMatchingElement(<input type="checkbox" />)).toEqual(true);
  });
});
