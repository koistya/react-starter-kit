/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './NotFoundPage.less';

@withStyles(styles)
class NotFoundPage {

  render() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>
      </div>
    );
  }

}

export default NotFoundPage;
