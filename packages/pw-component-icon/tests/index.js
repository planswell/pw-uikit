import Icon from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Icon />', () => {
  it('renders font-awesome icons', () => {
    const renderedComponent = shallow(
      <Icon name="check" />
    );

    expect(renderedComponent.containsMatchingElement(
      <i className="fa fa-check" />
    )).toEqual(true);
  });
});
