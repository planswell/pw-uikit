import Modal from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Modal />', () => {
  it('renders', () => {
    const onClose = () => null;
    const renderedComponent = shallow(
      <Modal onClose={onClose} />
    );

    expect(renderedComponent.find('button').props().onClick).toEqual(onClose);
  });
});
