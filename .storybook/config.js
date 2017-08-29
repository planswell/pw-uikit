const React = require('react');
const { configure } = require('@kadira/storybook');
require('sanitize.css/sanitize.css');
require('../css/custom-font-faces.css');

function loadStories() {
  require('./../stories');
}

configure(loadStories, module);
