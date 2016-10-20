import Password from '../index';
import Input from 'pw-component-input';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Password />', () => {
  it('renders with placeholder', () => {
    const placeholderText = 'hello my darling';
    const renderedComponent = shallow(
      <Password placeholder={placeholderText} />
    );

    expect(renderedComponent.state().showing).toEqual(false);
    expect(renderedComponent.find(Input).props().placeholder).toEqual(placeholderText);
  });

  it('renders text field', () => {
    const renderedComponent = shallow(
      <Password showing />
    );
    expect(renderedComponent.state().showing).toEqual(true);
    expect(renderedComponent.find(Input).props().type).toEqual('text');
  });

  it('renders text field with value', () => {
    const valueText = 'hello my darling';
    const renderedComponent = shallow(
      <Password value={valueText} />
    );
    expect(renderedComponent.find(Input).props().value).toEqual(valueText);
  });

  it('renders password field', () => {
    const renderedComponent = shallow(
      <Password />
    );
    expect(renderedComponent.state().showing).toEqual(false);
    expect(renderedComponent.find(Input).props().type).toEqual('password');
  });

  it('password becomes shown and hidden', () => {
    const renderedComponent = shallow(
      <Password value="password" />
    );

    renderedComponent.find('button').simulate('click');
    expect(renderedComponent.state().showing).toEqual(true);
    expect(renderedComponent.find(Input).props().type).toEqual('text');

    renderedComponent.find('button').simulate('click');
    expect(renderedComponent.state().showing).toEqual(false);
    expect(renderedComponent.find(Input).props().type).toEqual('password');
  });
});
