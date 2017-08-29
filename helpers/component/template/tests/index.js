const %nameclasscase% = require('../index');
const expect = require('expect');
const { shallow } = require('enzyme');
const React = require('react');

describe('<%nameclasscase% />', () => {
  it('renders', () => {
    const renderedComponent = shallow(
      <%nameclasscase% foo="bar" />
    );

    expect(renderedComponent.props().foo).toEqual('bar');
  });
});
