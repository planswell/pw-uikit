import Input from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Input />', () => {
  it('renders', () => {
    const renderedComponent = shallow(
      <Input />
    );

    expect(renderedComponent.hasClass('default')).toBe(true);
    expect(renderedComponent.props().type).toEqual('input');
  });
});
