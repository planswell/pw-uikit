import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import DynamicList from '../components/dynamic-list';
import Input from '../components/input';
import { uniqueId } from 'lodash';

const newItem = text => ({ text, key: uniqueId() });

class Example extends Component {
  state = {
    items: [newItem('foo'), newItem('bar'), newItem('baz')],
  };

  add = () => this.setState(({ items }) => ({
    items: items.concat(newItem('')),
  }));

  remove = index => this.setState(({ items }) => ({
    items: items.slice(0, index).concat(items.slice(index + 1)),
  }));

  handleChange = index => (text) => {
    const items = this.state.items.slice();
    const changedItem = { ...items[index], text };
    items[index] = changedItem;
    this.setState({ items });
  };

  render() {
    const { items } = this.state;
    const { add, handleChange, remove } = this;
    const listProps = { add, remove };

    return (<DynamicList {...listProps}>
      {items.map((item, index) => (<div key={item.key}>
        <Input onChange={handleChange(index)} value={item.text} />
      </div>))}
    </DynamicList>);
  }
}

storiesOf('DynamicList', module)
  .add('default', () => <Example />);
