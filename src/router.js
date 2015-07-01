/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Router from './core/Router';
import ContentPage from './components/ContentPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';

const router = new Router();
const css = function (value) { this.data.css += value; };
const contentHandler = state => {
  state.data.title = 'Hello';
  return <ContentPage path={state.path} content="Hello" onInsertCss={css.bind(state)} />;
};

router.route('/', contentHandler);
router.route('/about', contentHandler);
router.route('/privacy', contentHandler);
router.route('/contact', state => <ContactPage onInsertCss={css.bind(state)} />);
router.route('/login', state => <LoginPage onInsertCss={css.bind(state)} />);
router.route('/register', state => <RegisterPage onInsertCss={css.bind(state)} />);

router.on('error', state => state.statusCode === 404 ? {
  children: <NotFoundPage path={state.path} onInsertCss={css.bind(state)} />,
  layout: 'none'
} : {
  children: <ErrorPage path={state.path} error={state.error} onInsertCss={css.bind(state)} />,
  layout: 'none'
});

export default router;
