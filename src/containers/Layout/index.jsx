import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components'
import Typography from '@mui/material/Typography';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Header from './Heder/Header';

const CustomTopbar = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  top: 0;
  height: 76px;
  z-index: 101;
  background: #1EA4CE
`

const Layout = ({basket}) => {
  return (
    <Header>
    </Header>
  );
};

Layout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  basket: PropTypes.array.isRequired,
};

export default (connect(state => ({
  basket: state.basket,
}))(Layout));
