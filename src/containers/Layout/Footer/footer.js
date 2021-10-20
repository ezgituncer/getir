import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components'
import Typography from '@mui/material/Typography';

const CustomTopbar = styled.div`
  position: static;
  display: flex;
  width: 100%;
  top: 0;
  z-index: 101;
  background: #FAFAFA;
  bottom:0;
  top:auto;
`

const Layout = ({basket}) => {
  return (
    <CustomTopbar>
        <p
          style={{
            textAlign: 'center',
            margin: 'auto',
            color: '#1EA4CE',
            fontStyle: 'normal',
            fontWeight: 'semibold',
            fontSize: '14px',
            lineHeight: '18px',
          }}>©2019 Market•Privacy Policy</p>
    </CustomTopbar>
  );
};

Layout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  basket: PropTypes.array.isRequired,
};

export default (connect(state => ({
  basket: state.basket,
}))(Layout));
