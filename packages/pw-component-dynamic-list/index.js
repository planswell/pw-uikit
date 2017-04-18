import React, { Children, Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './style.css';
import { omit } from 'lodash';
import Icon from 'pw-component-icon';
import Button from 'pw-component-button';

// Default text to render in the button which adds a new item
const defaultAddText = 'Add';

// Wraps list item in a handy wrapper with a remove button
function decorateListItem(item, index) {
  const handleRemove = this.handleRemove(index);

  return (<div styleName="item">
    {item}
    <Button styleName="remove" onClick={handleRemove}>
      <Icon name="cross" />
    </Button>
  </div>);
}

/**
 * Represents a dynamic list of things. You can add
 *
 * Usage:
 *
 * <DynamicList add={addNewItem} remove={removeItemByIndex}>
 *   <anything>Item 1</anything>
 *   <anything>Item 2</anything>
 *   <anything>Item 3</anything>
 *   ...
 * </DynamicList>
 */
export class DynamicList extends Component {
  static propTypes = {
    add: PropTypes.func,
    remove: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node,
    addText: PropTypes.string,
  };

  // Handles clicks on button which should add new list items
  handleAdd = event => this.props.add(event);

  // Handles clicks on the buttons which remove a list item
  handleRemove = index => event => this.props.remove(index, event);

  render() {
    const { handleAdd } = this;
    const { children, ...props } = this.props;
    const addText = this.props.addText || defaultAddText;
    const passthroughProps = omit(props, ['add', 'addText', 'remove', 'styles']);

    return (<div {...passthroughProps} styleName="base">
      {Children.map(children, decorateListItem, this)}
      <Button styleName="add" onClick={handleAdd}>{addText}</Button>
    </div>);
  }
}

export default cssModules(DynamicList, styles);
