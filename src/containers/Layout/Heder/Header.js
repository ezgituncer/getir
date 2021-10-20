import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components'
import Typography from '@mui/material/Typography';
import icon from './market.svg'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const CustomTopbar = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  top: 0;
  height: 76px;
  z-index: 101;
  background: #1EA4CE
`

const Header = ({basket}) => {
  return (
    <CustomTopbar>
          <img  
             style={{
              textAlign: 'center',
              margin: 'auto',
              paddingLeft:'11%'
            }}src={icon} alt=''/>
      <div style={{ background: '#147594', width: '130px',marginRight:'9%'}}>
        <p
          style={{
            textAlign: 'center',
            marginTop: '25px',
            color: '#FFFFFF',
            fontStyle: 'normal',
            fontWeight: 'semibold',
            fontSize: '14px',
            lineHeight: '18px',
          }}>₺{basket.total}</p>
      </div>
    </CustomTopbar>
  );
};

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  basket: PropTypes.array.isRequired,
};

export default (connect(state => ({
  basket: state.basket,
}))(Header));
