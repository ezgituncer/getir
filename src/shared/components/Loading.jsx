import React from 'react';
import PropTypes from 'prop-types';
import logo from './285.gif';

const Loading = ({ loading }) => (
  <div className={`load${loading ? '' : ' loaded'}`}>
    <div className="load__icon-wrap">
      <img src={logo} alt="" />
    </div>
  </div>
);

Loading.propTypes = {
  loading: PropTypes.bool,
};

Loading.defaultProps = {
  loading: false,
};

export default Loading;
