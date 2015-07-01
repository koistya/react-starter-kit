/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './ContactPage.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ContactPage {

  render() {
    return (
      <div className="ContactPage">
        <div className="ContactPage-container">
          <h1>Contact Us</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default ContactPage;
