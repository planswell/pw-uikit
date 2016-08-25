import Link from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Link />', () => {
  it('renders', () => {
    const renderedComponent = shallow(
      <Link />
    );

    expect(renderedComponent.containsMatchingElement(<a />)).toEqual(true);
  });
});
