import React from 'react';
import { storiesOf } from '@kadira/storybook';
import StickyBar from './../packages/pw-component-sticky-bar';

storiesOf('StickyBar', module)
  .add('default', () => (
    <StickyBar >
      <span>HEY_O!</span>
    </StickyBar>
  ));
