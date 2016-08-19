import Input from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Input />', () => {
  it('renders', () => {
    const placeholderText = 'hello my darling';
    const renderedComponent = shallow(
      <Input placeholder={placeholderText} />
    );

    expect(renderedComponent.props().placeholder).toEqual(placeholderText);
    expect(renderedComponent.containsMatchingElement(<input type="text" />)).toEqual(true);
  });
});
