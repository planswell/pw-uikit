const React = require('react');
const { Children, PropTypes } = React;
const cssModules = require('react-css-modules');
const styles = require('./style.css');
const { omit } = require('lodash');

const isLabel = node => node.type === 'tab-label';
const notLabel = node => node.type !== 'tab-label';
const isTab = node => node.type === 'tab';

/**
 * Represents a set of tabs, with one tab active at a time.
 *
 * Usage:
 *
 * <Tabs>
 *   <tab>
 *     <tab-label>Foo Label</tab-label>
 *
 *     All this content inside the tab
 *     will be displayed when you click
 *     the corresponding label!
 *   </tab>
 *   ...
 * </Tabs>
 */
class Tabs extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  state = { selected: 0 };

  // If the number of tabs should drop below the selected index, select the last tab
  componentWillReceiveProps(nextProps) {
    const numberOfTabs = Children.toArray(nextProps.children).filter(isTab).length;
    if (this.state.selected >= numberOfTabs) {
      this.setState({ selected: numberOfTabs - 1 });
    }
  }

  render() {
    const passthroughProps = omit(this.props, ['styles']);
    const tabs = Children.toArray(this.props.children).filter(isTab);
    const { selected } = this.state;

    const labels = tabs.map((tab, index) => {
      // Find the contents of the <tab-label>
      const labelContents = tab.props.children.find(isLabel).props.children;

      // Build the label props
      const labelProps = {
        onClick: () => this.setState({ selected: index }),
        styleName: index === selected ? 'tab-label-selected' : 'tab-label',
        key: index,
      };

      // Return our new label
      return (<div {...labelProps}>{labelContents}</div>);
    });

    // Grab the selected content
    const content = Children.toArray(tabs[selected].props.children).filter(notLabel);

    return (
      <div styleName="base" {...passthroughProps}>
        <header styleName="tab-labels">{labels}</header>
        <section styleName="tab-content">{content}</section>
      </div>
    );
  }
}

module.exports = cssModules(Tabs, styles, { allowMultiple: true });
