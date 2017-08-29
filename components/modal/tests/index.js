const Modal = require('../index');
const expect = require('expect');
const { shallow } = require('enzyme');
const React = require('react');

describe('<Modal />', () => {
  it('renders', () => {
    const onClose = () => null;
    const renderedComponent = shallow(
      <Modal onClose={onClose} />
    );

    expect(renderedComponent.find('button').props().onClick).toEqual(onClose);
  });
});
