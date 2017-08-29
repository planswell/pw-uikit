const ProgressBar = require('../index');
const expect = require('expect');
const { shallow } = require('enzyme');
const React = require('react');

describe('<ProgressBar />', () => {
  it('renders', () => {
    const renderedComponent = shallow(
      <ProgressBar />
    );

    expect(renderedComponent.find('svg').isEmpty()).toEqual(false);
    expect(renderedComponent.find('svg').children().is('rect')).toEqual(true);
  });

  it('renders dark', () => {
    const renderedComponent = shallow(
      <ProgressBar dark />
    );

    expect(renderedComponent.find('.dark').isEmpty()).toEqual(false);
  });

  it('renders children', () => {
    const renderedComponent = shallow(
      <ProgressBar>
        <p>Foobar!</p>
      </ProgressBar>
    );

    expect(renderedComponent.find('p').text()).toEqual('Foobar!');
  });

  it('renders a progress bar with a given width', () => {
    const renderedComponent = shallow(
      <ProgressBar value={0.33} />
    );

    expect(renderedComponent.find('rect').props().width).toEqual('33');
  });
});
