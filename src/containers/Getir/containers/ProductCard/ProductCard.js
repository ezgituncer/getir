import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { CardBody } from 'reactstrap';
import image from '../../img/getir2.jpg';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { reduxForm } from 'redux-form';
import { setProducts } from '../../../../redux/actions/basketActions'
import { connect } from 'react-redux';


const ProductPrice = styled(Typography)`
color:#1EA4CE;
font-size:14px;
line-height:20px;
`
const ProductName = styled(Typography)`
color:#191919;
font-size:14px;
line-height:20px;
height:40px;
`
const AddBasketButton = styled(Button)`
color:#FFFFFF;
font-size:14px;
line-height:20px;
background:#1EA4CE;
width:124px;
heigth:22px
`

class ProductCard extends Component {
  addProduct= (name,price) =>{
    const newProduct={name,price,count:1,operation:'add'};
  this.props.dispatch(setProducts(newProduct))
  }

  render() {
    const { price = null, name = {} } =
      this.props.product || {};

    return (
        <CardBody className="catalog-item" key={name}>
        <div style={{ paddingBottom: '20px' }} >
          <div className="catalog-item__img-wrap">
            <img className="catalog-item__img" src={image} alt="catalog-item-img" />
          </div>
          <div className="catalog-item__info">
            <ProductPrice>₺{price}</ProductPrice>
            <ProductName className="catalog-item__title">{name}</ProductName>
            <AddBasketButton variant="contained" onClick={()=>this.addProduct(name,price)}>Add</AddBasketButton>
          </div>
        </div>
      </CardBody>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
  }).isRequired
};
export default connect(state => ({
  basket: state.basket,
}))(reduxForm()(ProductCard));
