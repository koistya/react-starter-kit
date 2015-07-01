/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

export default {

  navigateTo(path) {
    Dispatcher.dispatch({
      type: ActionTypes.CHANGE_LOCATION,
      path
    });
  }

};
