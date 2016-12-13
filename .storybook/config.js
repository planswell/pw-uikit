import React from 'react';
import { configure } from '@kadira/storybook';
import 'sanitize.css/sanitize.css';
import '../packages/pw-base-css/custom-font-faces.css';

function loadStories() {
  require('./../stories');
}

configure(loadStories, module);
