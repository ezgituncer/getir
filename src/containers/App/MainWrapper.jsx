import React, {  Fragment } from 'react';
import PropTypes from 'prop-types';
import Loading from '../../shared/components/Loading';

const MainWrapper = ({
  theme, customizer, children, rtl, roundBorders, blocksShadows, location, fetchAppConfigAction, isFetching,
}) => {

  return (
    <Fragment>
      {isFetching ? (
        <Loading loading={isFetching} />
      ) : (
          <div >
            {children}
          </div>
      )}
    </Fragment>
  );
};

MainWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default(MainWrapper);
