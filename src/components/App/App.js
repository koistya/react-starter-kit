/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './App.less';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';

@withStyles(styles)
class App {

  static propTypes = {
    layout: PropTypes.string,
    children: PropTypes.element.isRequired
  };

  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  handlePopState(event) {
    AppActions.navigateTo(window.location.pathname, { replace: !!event.state });
  }

  render() {
    console.log('layout:', this.props.layout);
    return this.props.layout === 'none' ? this.props.children : (
      <div>
        <Header />
        {this.props.children}
        <Feedback />
        <Footer />
      </div>
    );
  }

}

export default App;
