/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import 'babel/polyfill';
import FastClick from 'fastclick';
import Dispatcher from './core/Dispatcher';
import ActionTypes from './constants/ActionTypes';
import router from './router';

const container = document.getElementById('app');

const setMetaTag = (name, content) => {
  // Remove and create a new <meta /> tag in order to make it work
  // with bookmarks in Safari
  let elements = document.getElementsByTagName('meta');
  [].slice.call(elements).forEach((element) => {
    if (element.getAttribute('name') === name) {
      element.parentNode.removeChild(element);
    }
  });
  let meta = document.createElement('meta');
  meta.setAttribute('name', name);
  meta.setAttribute('content', content);
  document.getElementsByTagName('head')[0].appendChild(meta);
};

function run() {
  router.dispatch(window.location.pathname, container, ({ data }) => {
    const css = document.getElementById('css');
    css.parentNode.removeChild(css);
    document.title = data.title;
    setMetaTag('description', data.description);
  });

  // Re-render application when `window.location` changes
  Dispatcher.register(action => {
    if (action.type === ActionTypes.CHANGE_LOCATION) {
      router.dispatch(action.path, container, ({ data }) => {
        document.title = data.title;
        setMetaTag('description', data.description);
      });
    }
  });
}

// Run the application when DOM is ready
new Promise(resolve => {
  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', resolve);
  } else {
    window.attachEvent('onload', resolve);
  }
}).then(() => FastClick.attach(document.body)).then(run);
