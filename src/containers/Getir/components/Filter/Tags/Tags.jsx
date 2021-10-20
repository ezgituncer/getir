import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import SearchBar from '../../../containers/SearchBar/SearchBar';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { default as data } from "../../MOCK_DATA.json";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { setTag } from '../../../../../redux/actions/productActions'
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

const Tags = ({  dispatch }) => {
  const [searched, setSearched] = useState('');
  const [tags, setTags] = useState([]);
  const [initalTags, setInitialTags] = useState([]);
  const [selected, setSelected] = useState([]);

  const onChange = (tag) => {
    let find = selected.indexOf(tag)

    if (find > -1) {
      selected.splice(find, 1)
    } else {
      selected.push(tag)
    }
    setSelected(selected)
    dispatch(setTag(selected))
  }


  const requestSearch = (searchedVal) => {
    const filteredRows = initalTags.filter((row) => row.toLowerCase().includes(searchedVal.toLowerCase()));
    setTags(filteredRows)
  };

  useEffect(() => {
    const tags = new Set();
    data.map(item => {
      item.tags.forEach(tag => {
        const duplicate = tags.has(tag);
        tags.add(tag);
        return !duplicate;
      })
    });
    const test = [...tags]
    setTags(test)
    setInitialTags(test)
  }, [])

  const cancelSearch = () => {
    setSearched('');
    setTags(initalTags)
  };
  return (
    <SortBox>
      <FormLabel component="legend">Tags</FormLabel>
      <nav aria-label="main mailbox folders" style={{ padding: '0px 30px 5px 30px' }}>
        <SearchBar
          value={searched}
          onChange={searchVal => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
          placeholder="Search tag"
        />
        <BrandList >
          <FormGroup>
            <FormControlLabel control={<Checkbox style={{ color: '#1EA4CE' }} />} label={'All(' + initalTags.length + ')'} />
            {tags.map((item) => (
              <FormControlLabel control={
                <Checkbox
                  onChange={() => onChange(item)}
                  selected={selected.includes(item)}
                  style={{ color: '#1EA4CE' }} />} label={item} />
            ))}

          </FormGroup>
        </BrandList>
      </nav>
    </SortBox>
  );
}
Tags.propTypes = {
  tagItems: PropTypes.array.isRequired,
};

export default connect(state => ({
  tagItems: state.product.tags,
}))(reduxForm()(Tags));