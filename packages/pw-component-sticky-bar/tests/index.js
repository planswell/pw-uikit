import StickyBar from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<StickyBar />', () => {
  it('renders', () => {
    const renderedComponent = shallow(
      <StickyBar foo="bar" />
    );

    expect(renderedComponent.props().foo).toEqual('bar');
  });
});
