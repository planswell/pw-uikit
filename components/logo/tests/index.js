import Logo from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Logo />', () => {
  it('renders', () => {
    const renderedComponent = shallow(
      <Logo />
    );

    expect(renderedComponent.find('svg').isEmpty()).toEqual(false);
    expect(renderedComponent.find('div').children().is('svg')).toEqual(true);
  });

  it('renders correct colors', () => {
    const renderedComponent = shallow(
      <Logo className="green" />
    );

    expect(renderedComponent.hasClass('green')).toEqual(true);
  });
});
