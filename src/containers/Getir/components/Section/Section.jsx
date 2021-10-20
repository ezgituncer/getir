import React, { Component } from "react";
import { default as rows } from "../MOCK_DATA.json";
import "./App.css";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import Box from '@mui/material/Box';

import Pagination from "../../containers/Pagination/Pagination";
import ProductCard from "../../containers/ProductCard/ProductCard";

class Section extends Component {
  state = {
    allProducts: [],
    currentProducts: [],
    currentPage: null,
    totalPages: null

  };

  componentDidMount() {
    const allProducts = rows.sort(function (a, b) { return a.price - b.price; });
    this.setState({ allProducts });
  }

  setSorting = (previousProps) => {
    let sortData = [];
    const sorting = this.props.productFilter.sorting;
    if (sorting === 'lowtohigh' || sorting === '') {
      sortData = this.state.allProducts.sort(function (a, b) { return a.price - b.price; });
    }
    else if (sorting === 'hightolow') {
      sortData = this.state.allProducts.sort(function (a, b) { return b.price - a.price; });
    }
    else if (sorting === 'newtoold') {
      sortData = this.state.allProducts.sort(function (a, b) { return b.added - a.added; });
    }
    else if (sorting === 'oldtonew') {
      sortData = this.state.allProducts.sort(function (a, b) { return a.added - b.added; });

    }
    if (previousProps.productFilter.sorting !== sorting) {
      this.setState({ allProducts: sortData });
      const current = sortData.slice(0, 16);
      this.setState({ currentProducts: current });
    }
  }
  setBrandFilter = (previousProps) => {
    if (this.props.productFilter.brands.length !== 0) {
      const brands = this.props.productFilter.brands
      let filterData = [];
      brands.map((item) => {
        const filter = this.state.allProducts.filter((row) => row.manufacturer.toLowerCase().includes(item.toLowerCase()));
        filterData = filterData.concat(filter)
      })
      if (previousProps.productFilter !== this.props.productFilter) {
        this.setState({ allProducts: filterData });
        const current = filterData.slice(0, 16);
        this.setState({ currentProducts: current });
      }
    }
  }
  setTagFilter = (previousProps) => {
    if (this.props.productFilter.tags.length !== 0) {
      const selectedTags = this.props.productFilter.tags
      let filterData = [];

      this.state.allProducts.map((product)=>{
        product.tags.map(tag=>{
          selectedTags.map(selected=>{
            const filter = this.state.allProducts.filter((row) => tag.toLowerCase().includes(selected.toLowerCase()));
            filterData = filterData.concat(filter)
          })
        })

      })
  

      if (previousProps.productFilter !== this.props.productFilter) {
        this.setState({ allProducts: filterData });
        const current = filterData.slice(0, 16);
        this.setState({ currentProducts: current });
      }
    }
  }

  componentDidUpdate(previousProps) {

    if (previousProps.productFilter !== this.props.productFilter) {
  
      this.setSorting(previousProps)
      this.setBrandFilter(previousProps)
      this.setTagFilter(previousProps)
    }
  }

  onPageChanged = data => {
    const { allProducts } = this.state;
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentProducts = allProducts.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentProducts, totalPages });
  };

  render() {
    const {
      allProducts,
      currentProducts,
      currentPage,
      totalPages
    } = this.state;
    const totalCountries = allProducts.length;

    if (totalCountries === 0) return null;

    const headerClass = [
      "text-dark py-2 pr-4 m-0",
      currentPage ? "border-gray border-right" : ""
    ]
      .join(" ")
      .trim();

    return (
      <>
      <Box p="5">
        <div className="catalog-items__wrap">
          <div className="catalog-items">
            {currentProducts.map((product,index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </Box>
              <Pagination
              totalRecords={totalCountries}
              pageLimit={16}
              pageNeighbours={1}
              onPageChanged={this.onPageChanged}
            />
            </>
    );
  }
}

Section.propTypes = {
  productFilter: PropTypes.array.isRequired,

};

const mapStateToProps = state => ({
  productFilter: state.product,
});

export default connect(mapStateToProps)(Section);
