/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './ErrorPage.less';

@withStyles(styles)
class ErrorPage {

  render() {
    return (
      <div>
        <h1>Error</h1>
        <p>Sorry, there is an error occurred.</p>
      </div>
    );
  }

}

export default ErrorPage;
