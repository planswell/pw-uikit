const Input = require('../index');
const expect = require('expect');
const { shallow } = require('enzyme');
const React = require('react');

describe('<Input />', () => {
  it('renders', () => {
    const placeholderText = 'hello my darling';
    const wrapper = shallow(<Input placeholder={placeholderText} />);

    expect(wrapper.prop('placeholder')).toEqual(placeholderText);
    expect(wrapper.containsMatchingElement(<input type="text" />)).toEqual(true);
  });

// this test is broken, gets the following error even though it definitely renders MaskedInput when it should in practice.
// seems to be enzyme / babel related.
// Error: Expected { default: [Function: MaskedInput] } to equal 'MaskedInput'
//     at assert

  it('renders MaskedInput when `mask` props is provided', () => {
    const wrapper = shallow(<Input mask="111-111-1111" />);

    expect(wrapper.name()).toEqual('MaskedInput');
  });

  it('renders when appearance is applied', () => {
    const wrapper = shallow(<Input appearance="invalid" />);

    expect(wrapper.name()).toEqual('input');
    expect(wrapper.hasClass('invalid')).toBe(true);
  });

  it('formats onChange param as a number when type is "number"', () => {
    let value;
    const wrapper = shallow(<Input type="number" onChange={v => (value = v)} />);
    wrapper.simulate('change', { target: { value: '42' } }); // simulate change with string value
    expect(value).toBe(42); // expect to be given numeric value
  });
});
