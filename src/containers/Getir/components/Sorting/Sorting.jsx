import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import {reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {setSorting} from '../../../../redux/actions/productActions'



const CustomTypography = styled(Typography)`
color:#525252;
font-size:14px;
line-height:18px;
letter-spacing: 0.16px;
margin-left:30px !important;
`
const SortBox = styled(Box)`
width: 100%;
background: #FFFFFF;
`

function BpRadio(props) {
  return (
    <Radio
      sx={{
        left: '28px',
        '&:hover': {
          bgcolor: 'transparent',
        },
      }}

      disableRipple
      color="default"
      checkedIcon={<CheckCircleOutlineIcon style={{ fill: '#1EA4CE' }} />}
      icon={<RadioButtonUncheckedIcon style={{ fill: '#DFDEE2' }} />}
      {...props}
    />
  );
}

  const SortingList = ({  sorting,dispatch}) => {
  const [value, setValue] = React.useState('lowtohigh');

  const handleChange = (event) => {
    setValue(event.target.value);
    dispatch(setSorting(event.target.value))
  };
  return (
    <SortBox>
      <FormControl component="fieldset">
        <FormLabel component="legend">Sorting</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="customized-radios"
          value={value}
          onChange={handleChange}>
          <FormControlLabel
            value="lowtohigh"
            control={<BpRadio />}
            label={<CustomTypography> Price low to high</CustomTypography>}
            style={{ marginBottom: 0 }} />
          <FormControlLabel
            value="hightolow"
            control={<BpRadio />}
            label={<CustomTypography> Price high to low</CustomTypography>}
            style={{ marginBottom: 0 }} />
          <FormControlLabel
            value="newtoold"
            control={<BpRadio />}
            label={<CustomTypography> New to old</CustomTypography>}
            style={{ marginBottom: 0 }} />
          <FormControlLabel
            value="oldtonew"
            control={<BpRadio />}
            label={<CustomTypography> Old to new</CustomTypography>}
            style={{ marginBottom: 0 }} />
        </RadioGroup>
      </FormControl>
    </SortBox>
  );
}
SortingList.propTypes = {
  sorting: PropTypes.string.isRequired,
};

export default connect(state => ({
  sorting: state.product.sorting,
}))(reduxForm()(SortingList));
