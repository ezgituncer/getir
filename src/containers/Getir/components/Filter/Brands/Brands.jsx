import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import SearchBar from '../../../containers/SearchBar/SearchBar';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { default as data } from "../../MOCK_DATA.json";
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { setBrands } from '../../../../../redux/actions/productActions'
import FormLabel from '@mui/material/FormLabel';


const BrandList = styled(List)`
height: 142px;
overflow-y: auto;
margin-top:10px;

`
const SortBox = styled(Box)`
width: 100%;
height:244px;
background: #FFFFFF;
margin-top:50px;
`

const Brands = ({ brandItems, dispatch }) => {
  const [searched, setSearched] = useState('');
  const [rows, setRows] = useState(data);
  const [initalBrands, setInitialBrands] = useState([]);
  const [selected, setSelected] = useState([]);

  const onChange = (manufacturer) => {
    let find = selected.indexOf(manufacturer)

    if (find > -1) {
      selected.splice(find, 1)
    } else {
      selected.push(manufacturer)
    }
    setSelected(selected)
    dispatch(setBrands(selected))
  }


  const requestSearch = (searchedVal) => {
    const filteredRows = initalBrands.filter((row) => row.manufacturer.toLowerCase().includes(searchedVal.toLowerCase()));
    setRows(filteredRows)

  };

  useEffect(() => {
    const seen = new Set();
    const filteredArr = rows.filter(item => {
      const duplicate = seen.has(item.manufacturer);
      seen.add(item.manufacturer);
      return !duplicate;
    });
    setRows(filteredArr)
    setInitialBrands(filteredArr)
  }, [])

  const cancelSearch = () => {
    setSearched('');
    setRows(initalBrands)
  };
  return (
    <>
   
    <SortBox>
    <FormLabel component="legend">Brands</FormLabel>
      <nav aria-label="main mailbox folders" style={{ padding: '0px 30px 5px 30px' }}>
        <SearchBar
          value={searched}
          onChange={searchVal => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
          placeholder="Search brand"
        />
        <BrandList >
          <FormGroup>
            <FormControlLabel control={
            <Checkbox 
            style={{ color: '#1EA4CE' }} />} label={'All(' + initalBrands.length + ')'} />
            {rows.map((item) => (
              <FormControlLabel control={
              <Checkbox
                onChange={() => onChange(item.manufacturer)}
                selected={selected.includes(item.manufacturer)}
                style={{ color: '#1EA4CE' }} />} label={item.manufacturer} />
            ))}

          </FormGroup>
        </BrandList>
      </nav>
    </SortBox>
    </>
  );
}
Brands.propTypes = {
  brandItems: PropTypes.array.isRequired,
};

export default connect(state => ({
  brandItems: state.product.brands,
}))(reduxForm()(Brands));