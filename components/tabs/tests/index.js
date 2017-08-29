const Tabs = require('../index');
const expect = require('expect');
const { shallow } = require('enzyme');
const React = require('react');

describe('<Tabs />', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Tabs>
        <tab>
          <tab-label>Foo Label</tab-label>
          Foo Content
        </tab>
        <tab>
          <tab-label>Bar Label</tab-label>
          Bar Content
        </tab>
      </Tabs>
    );

    const labels = wrapper.find('header').children();
    const section = wrapper.find('section');

    expect(labels.length).toBe(2);
    expect(section.length).toBe(1);

    expect(labels.at(0).text()).toBe('Foo Label');
    expect(labels.at(1).text()).toBe('Bar Label');
    expect(section.text()).toBe('Foo Content');
  });

  it('switches tabs', () => {
    const wrapper = shallow(
      <Tabs>
        <tab>
          <tab-label>Foo Label</tab-label>
          Foo Content
        </tab>
        <tab>
          <tab-label>Bar Label</tab-label>
          Bar Content
        </tab>
      </Tabs>
    );

    const labels = wrapper.find('header').children();
    let section;

    labels.at(1).simulate('click');
    section = wrapper.find('section');
    expect(section.text()).toBe('Bar Content');

    labels.at(0).simulate('click');
    section = wrapper.find('section');
    expect(section.text()).toBe('Foo Content');
  });
});
