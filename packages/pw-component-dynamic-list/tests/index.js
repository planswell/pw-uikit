import DynamicList from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { identity } from 'lodash';

describe('<DynamicList />', () => {
  it('renders', () => {
    const children = [
      <div>foo</div>,
      <div>bar</div>,
      <div>baz</div>,
    ];

    const wrapper = shallow(
      <DynamicList add={identity} remove={identity}>
        {children}
      </DynamicList>
    );

    expect(wrapper.children().containsAnyMatchingElements(children)).toBe(true);
  });

  it('adds', () => {
    const add = expect.createSpy();
    const wrapper = shallow(<DynamicList add={add} remove={identity} />);
    const addButton = wrapper.children().last();

    addButton.prop('onClick')();
    expect(add).toHaveBeenCalled();
  });

  it('removes', () => {
    const remove = expect.createSpy();
    const wrapper = shallow(
      <DynamicList add={identity} remove={remove}>
        <div>foo</div>
      </DynamicList>
    );
    const removeButton = wrapper.children().first().children().last();
    const event = {};

    removeButton.prop('onClick')(event);
    expect(remove).toHaveBeenCalledWith(0, event);
  });
});
