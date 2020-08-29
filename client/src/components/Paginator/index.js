import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, MenuItem, Select, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const Paginator = (props) => {
  const classes = useStyles();
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

  const onChangePageNumberSelect = (event) => {
    onChangePageNumber(event.target.value);
  };

  const onChangeItemsPerPageSelect = (event) => {
    onChangeItemsPerPage(event.target.value);
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
      <Select value={pageNumber} onChange={onChangePageNumberSelect}>
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
      <Select value={itemsPerPage} onChange={onChangeItemsPerPageSelect}>
        {menuItems}
      </Select>
    );
  };

  return (
    <div>
      <Grid container alignItems='center' spacing={2}>
        <Grid item>
          <Button
            variant='contained'
            disabled={prevPageButtonDisabled}
            onClick={onPrevPageClick}
          >
            Prev. Page
          </Button>
        </Grid>
        <Grid item>{renderCurrentPageSelect()}</Grid>
        <Grid item>
          <Button
            variant='contained'
            disabled={nextPageButtonDisabled}
            onClick={onNextPageClick}
            className={classes.nextButton}
          >
            Next Page
          </Button>
        </Grid>
        <Grid item>
          <Typography>Posts per page</Typography>
        </Grid>
        <Grid item>{renderItemsPerPageSelect()}</Grid>
      </Grid>
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
