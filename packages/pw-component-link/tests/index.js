import OurLink from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { Link } from 'react-router';

describe('<Link>', () => {
  it('renders like a text link', () => {
    const href = 'http://example.com';
    const text = 'Click Me!';
    const renderedComponent = shallow(
      <OurLink to={href}>{text}</OurLink>
    );

    expect(renderedComponent.containsMatchingElement(
      <Link to={href}><span>{text}</span></Link>
    )).toEqual(true);
    expect(renderedComponent.props().className).toEqual('base default link');
  });

  it('renders like a button', () => {
    const href = 'http://example.com';
    const text = 'Click Me!';
    const renderedComponent = shallow(
      <OurLink button to={href}>{text}</OurLink>
    );

    expect(renderedComponent.containsMatchingElement(
      <Link to={href}><span>{text}</span></Link>
    )).toEqual(true);
    expect(renderedComponent.props().className).toEqual('base default button');
  });
});
