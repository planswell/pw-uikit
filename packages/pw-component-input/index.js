import React from 'react';
import cssModules from 'react-css-modules';
import cssStyles from './style.css';
import omit from 'lodash/omit';

const { PropTypes } = React;

class Input extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'text',
      'email',
      'number',
      'password',
      'search',
    ]),
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    invalid: PropTypes.bool,
    tabIndex: PropTypes.number,
  }

  static defaultProps = {
    type: 'text',
  }

  handleChange = e => {
    this.props.onChange(e.target.value);
  }

  render() {
    const passthroughProps = omit(this.props, 'styles');
    return (
      <input
        {...passthroughProps}
        styleName="default"
        onChange={this.handleChange}
      />
    );
  }
}

export default cssModules(Input, cssStyles);
