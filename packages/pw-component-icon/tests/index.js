import Icon from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

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
