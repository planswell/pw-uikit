import React from 'react';
import { configure } from '@kadira/storybook';
import 'sanitize.css/sanitize.css';

function loadStories() {
  require('./../stories');
}

configure(loadStories, module);
