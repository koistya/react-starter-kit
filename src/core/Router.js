/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import App from '../components/App';

const render = (state, component, container) => {
  const props = React.isValidElement(component) ? { children: component } : component;
  const element = <App onInsertCss={css => state.data.css += css} {...props} />;
  if (container) {
    React.render(element, container);
  } else {
    state.data.body = React.renderToString(element);
  }
};

class Router {

  constructor() {
    this.routes = [];
    this.events = Object.create(null);
  }

  route(path, handler) {
    this.routes.push({ path, handler });
  }

  on(event, handler) {
    this.events[event] = handler;
  }

  dispatch(path, container, callback) {
    if (!callback) {
      callback = container;
      container = null;
    }

    let component;
    const state = { path, data: { title: '', description: '', css: '' } };

    for (let route of this.routes) {
      if (route.path === path) {
        try {
          component = route.handler(state);
          if (!component) { continue; }
          state.statusCode = 200;
          render(state, component, container);
        } catch (err) {
          state.statusCode = 500;
          state.error = err;
          component = this.events.error && this.events.error(state);
          if (!component) { throw err; }
          render(state, component, container);
        }
        callback(state);
        return;
      }
    }

    state.statusCode = 404;
    component = this.events.error(state);
    render(state, component, container);
    callback(state);
  }
}

export default Router;
