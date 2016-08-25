import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import 'sanitize.css/sanitize.css';

// this wraps each of our stories in this specific react component.
addDecorator((story) => (
  <div style={{ width: '50%' }}>
    {story()}
  </div>
));

configure(() => {
  // not sure what to do here
}, module);
