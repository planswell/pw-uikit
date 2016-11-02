import Input from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Input />', () => {
  it('renders', () => {
    const placeholderText = 'hello my darling';
    const wrapper = shallow(<Input placeholder={placeholderText} />);

    expect(wrapper.prop('placeholder')).toEqual(placeholderText);
    expect(wrapper.containsMatchingElement(<input type="text" />)).toEqual(true);
  });

  it('renders MaskedInput when `mask` props is provided', () => {
    const wrapper = shallow(<Input mask="111-111-1111" />);

    expect(wrapper.name()).toEqual('MaskedInput');
  });

  it('renders when appearance is applied', () => {
    const wrapper = shallow(<Input appearance="invalid" />);

    expect(wrapper.name()).toEqual('input');
    expect(wrapper.hasClass('invalid')).toBe(true);
  });
});
