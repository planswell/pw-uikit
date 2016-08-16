import Button from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Button />', () => {
  it('renders', () => {
    const renderedComponent = shallow(
      <Button />
    );

    expect(renderedComponent.hasClass('default')).toBe(true);
    expect(renderedComponent.props().type).toEqual('button');
  });
});
