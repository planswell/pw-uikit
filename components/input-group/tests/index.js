import InputGroup from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<InputGroup />', () => {
  it('renders childrens', () => {
    const renderedComponent = shallow(
      <InputGroup>
        <input />
        <input />
      </InputGroup>
    );

    expect(renderedComponent.find('input').length).toEqual(2);
  });
});
