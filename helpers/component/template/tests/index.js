import %nameclasscase% from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<%nameclasscase% />', () => {
  it('renders', () => {
    const renderedComponent = shallow(
      <%nameclasscase% foo="bar" />
    );

    expect(renderedComponent.props().foo).toEqual('bar');
  });
});
