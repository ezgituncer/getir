import React from 'react';
import PropTypes from 'prop-types';
import {Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import 'bootstrap/dist/css/bootstrap.css';
import { createMuiTheme, ThemeProvider } from '@mui/material/styles';
import '../../scss/app.scss';
import { LoadScript } from '@react-google-maps/api';
import 'firebase/auth';
import Router from './Router';
import store from './store';
import ScrollToTop from './ScrollToTop';

const ThemeComponent = ({ children, themeName }) => {
  const theme = createMuiTheme({
    palette: {
      type: themeName === 'theme-dark' ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

ThemeComponent.propTypes = {
  children: PropTypes.shape().isRequired,
  themeName: PropTypes.string.isRequired,
};
const App = () => {

  return (
    <Provider store={store}>
        <BrowserRouter basename="/">
          <I18nextProvider i18n={i18n}>
            <LoadScript
              googleMapsApiKey="" /* Paste your Google Maps Api Key here */
            >
              <ScrollToTop>
                  <Router />
              </ScrollToTop>
            </LoadScript>
          </I18nextProvider>
        </BrowserRouter>
    </Provider>
  );
};

export default App;
