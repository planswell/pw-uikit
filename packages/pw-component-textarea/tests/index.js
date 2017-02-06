import Textarea from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Textarea />', () => {
  it('renders', () => {
    const renderedComponent = shallow(
      <Textarea appearance="invalid" />
    );

    expect(renderedComponent.hasClass('invalid')).toBe(true);
  });
});
