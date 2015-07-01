/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './LoginPage.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class LoginPage {

  render() {
    return (
      <div className="LoginPage">
        <div className="LoginPage-container">
          <h1>Log In</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default LoginPage;
