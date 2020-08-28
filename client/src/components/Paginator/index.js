import React from 'react';
import PropTypes from 'prop-types';

const Paginator = (props) => {
  const { totalItemCount, pageNumber, itemsPerPage } = props;
  const { onChangePageNumber, onChangeItemsPerPage } = props;

  return (
    <>
      <p>{totalItemCount}</p>
      <p>{pageNumber}</p>
      <p>{itemsPerPage}</p>
    </>
  );
};

Paginator.propTypes = {
  totalItemCount: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onChangePageNumber: PropTypes.func.isRequired,
  onChangeItemsPerPage: PropTypes.func.isRequired,
};

export default Paginator;
