import React from 'react';
import PropTypes from 'prop-types';
import { Button, MenuItem, Select } from '@material-ui/core';

const Paginator = (props) => {
  const { totalItemCount, pageNumber, itemsPerPage } = props;
  const { onChangePageNumber, onChangeItemsPerPage } = props;
  const pageCount = Math.ceil(totalItemCount / itemsPerPage);

  const prevPageButtonDisabled = pageNumber <= 0;
  const nextPageButtonDisabled = pageNumber >= pageCount - 1;

  const onPrevPageClick = (event) => {
    if (!prevPageButtonDisabled) {
      onChangePageNumber(pageNumber - 1);
    }
  };

  const onNextPageClick = (event) => {
    if (!nextPageButtonDisabled) {
      onChangePageNumber(pageNumber + 1);
    }
  };

  const renderCurrentPageSelect = () => {
    let menuItems = [];
    for (var i = 0; i < pageCount; i++) {
      menuItems.push(
        <MenuItem key={i} value={i}>
          {i + 1}
        </MenuItem>
      );
    }
    return (
      <Select value={pageNumber} onChange={onChangePageNumber}>
        {menuItems}
      </Select>
    );
  };

  const renderItemsPerPageSelect = () => {
    const itemsPerPageValues = [10, 50, 100];
    let menuItems = [];
    itemsPerPageValues.forEach((itemsPerPageValue) => {
      menuItems.push(
        <MenuItem key={itemsPerPageValue} value={itemsPerPageValue}>
          {itemsPerPageValue}
        </MenuItem>
      );
    });
    return (
      <Select value={itemsPerPage} onChange={onChangeItemsPerPage}>
        {menuItems}
      </Select>
    );
  };

  return (
    <div>
      <Button
        variant='contained'
        disabled={prevPageButtonDisabled}
        onClick={onPrevPageClick}
      >
        Prev. Page
      </Button>
      {renderCurrentPageSelect()}
      {renderItemsPerPageSelect()}
      <Button
        variant='contained'
        disabled={nextPageButtonDisabled}
        onClick={onNextPageClick}
      >
        Next Page
      </Button>
    </div>
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
