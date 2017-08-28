const React = require('react');
const { PropTypes } = React;
const cssModules = require('react-css-modules');
const styles = require('./style.css');

function %nameclasscase%(props) {
  return (
    <div className={props.className} styleName="base">
    </div>
  );
}

%nameclasscase%.propTypes = {
  foo: PropTypes.string,
};

module.exports = cssModules(%nameclasscase%, styles);
