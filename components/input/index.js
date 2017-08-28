const React = require('react');
const cssModules = require('react-css-modules');
const cssStyles = require('./style.css');
const { omit } = require('lodash');

// need to do this as per https://github.com/insin/react-maskedinput/issues/104#issuecomment-315752541
const MaskedInputImported = require('react-maskedinput');
const MaskedInput = MaskedInputImported.default || MaskedInputImported;

const { PropTypes } = React;

class Input extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'color',
      'date',
      'datetime',
      'datetime-local',
      'email',
      'file',
      'image',
      'month',
      'number',
      'password',
      'range',
      'search',
      'tel',
      'text',
      'time',
      'url',
      'week',
    ]),
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    invalid: PropTypes.bool,
    tabIndex: PropTypes.number,
    mask: PropTypes.string,
    appearance: PropTypes.oneOf(['default', 'invalid']),
  }

  static defaultProps = {
    appearance: 'default',
    type: 'text',
  }

  isNumber = () => this.props.type === 'number';

  handleChange = e => this.props.onChange(this.isNumber() ? Number(e.target.value) : e.target.value);

  render() {
    const { mask, appearance } = this.props;
    const passthroughProps = omit(this.props, ['styles', 'appearance']);
    const InputComponent = mask ? MaskedInput : 'input';
    return (
      <InputComponent
        styleName={appearance}
        {...passthroughProps}
        onChange={this.handleChange}
      />
    );
  }
}

module.exports = cssModules(Input, cssStyles);
