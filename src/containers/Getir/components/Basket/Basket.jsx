import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';

import { Typography } from '@mui/material';
import { useEffect } from 'react';

import { useState } from 'react';

import { setProducts,setTotal } from '../../../../redux/actions/basketActions'

const SortBox = styled(Box)`
max-height: 370px;
overflow-y: auto;
background: #FFFFFF;
border:8px solid #1EA4CE;
border-radius:2px;
`
const EmptyBox = styled(Box)`
max-width:340px;
height:296px;
background: #FFFFFF;
border:8px solid #1EA4CE;
border-radius:2px;
`
const CountBox = styled(Box)`
width:32px;
height:32px;
background: #1EA4CE;
border:1px solid #1EA4CE;
`
const TotalBox = styled(Box)`
width:92px;
height:52px;
border:3px solid #1EA4CE;
`
const CustomTypography = styled(Typography)`
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
margin-top:15%!important;
`
const TotalTypography = styled(Typography)`
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 20px;
text-align: center;
color: #1EA4CE;
margin-top:15%!important;
`
const CustomAddIcon = styled(AddIcon)`
fill:#1EA4CE;
padding-left:5px;
`
const CustomRemoveIcon = styled(RemoveIcon)`
fill:#1EA4CE;
padding-right:5px;
`
const CustomDivider = styled(Divider)`
margin:0 25px 0 25px;
color:#F4F4F4;
`
const EmptyList = styled(ListItem)`
margin-top: 30%;
text-align: center;
`

const Basket = ({ basket, dispatch }) => {
  const [basketTotal, setBasketTotal] = useState(0)

  const addProduct= (name,price,operation) =>{
    const newProduct={name,price,count:1,operation:'add'};
   dispatch(setProducts(newProduct))
  }

  const removeProduct= (name,price,operatio) =>{
    const newProduct={name,price,count:1,operation:'remove'};
    dispatch(setProducts(newProduct))
  }

  useEffect(() => {
    let total = 0;
    basket.products.map(item => (total =total + ((item.price)*(item.count))))
    setBasketTotal(total)
    dispatch(setTotal(total))
  }, [basket])

  if (basket.products.length === 0) {
    return (
      <EmptyBox>
        <nav aria-label="main mailbox folders">
          <EmptyList>
            <ListItemText
                      primary='Septiniz su an bos'
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="#1EA4CE"
                          >
                           Sipariş vermek için sepetinize ürün ekleyin
                          </Typography>
                        </React.Fragment>
                      }
                    />
          </EmptyList>
        </nav>
      </EmptyBox>
    );
  }
  else {
    return (
      <SortBox>
        <nav aria-label="main mailbox folders">
          <List>
            {basket.products.map(basketItem => (
              <>
                <ListItem >
                  <ListItemButton>
                    <ListItemText
                      primary={basketItem.name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="#1EA4CE"
                          >
                            ${basketItem.price}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                    <Button onClick={()=>removeProduct(basketItem.name,basketItem.price)}>
                    <CustomRemoveIcon  />
                    </Button>
                    <CountBox>
                      <CustomTypography >{basketItem.count} </CustomTypography>
                    </CountBox>
                    <Button onClick={()=>addProduct(basketItem.name,basketItem.price)}>
                    <CustomAddIcon />
                    </Button>
                  </ListItemButton>
                </ListItem>
                <CustomDivider />
              </>
            ))}
            <ListItem >
              <ListItemButton>
                <ListItemText
                  primary=''
                />
                <TotalBox>
                  <TotalTypography >₺{basketTotal} </TotalTypography>
                </TotalBox>
              </ListItemButton>
            </ListItem>
            <CustomDivider />
          </List>
        </nav>
      </SortBox>
    );
  }
}
Basket.propTypes = {
  basket: PropTypes.array.isRequired,
};

export default connect(state => ({
  basket: state.basket,
}))(reduxForm()(Basket));
