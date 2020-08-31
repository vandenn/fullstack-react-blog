import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { actions } from 'actions/ui/homePage';
import { actions as postDataActions } from 'actions/data/posts';
import Paginator from 'components/Paginator';
import PostPreview from 'components/PostPreview';
import { makeTotalPostCountSelector } from 'selectors/data/posts';
import {
  makePostListPageNumberSelector,
  makeNumberOfPostsPerPageSelector,
  makeVisiblePostsIdsSelector,
} from 'selectors/ui/homePage';
import styles from './styles';

const useStyles = makeStyles(styles);

const HomePage = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const totalPostCountSelector = useMemo(makeTotalPostCountSelector, []);
  const totalPostCount = useSelector(totalPostCountSelector);
  const postListPageNumberSelector = useMemo(
    makePostListPageNumberSelector,
    []
  );
  const postListPageNumber = useSelector(postListPageNumberSelector);
  const numberOfPostsPerPageSelector = useMemo(
    makeNumberOfPostsPerPageSelector,
    []
  );
  const numberOfPostsPerPage = useSelector(numberOfPostsPerPageSelector);
  const visiblePostsIdsSelector = useMemo(makeVisiblePostsIdsSelector, []);
  const visiblePostsIds = useSelector(visiblePostsIdsSelector);

  useEffect(() => {
    dispatch(actions.invokeFetchVisiblePostsAndAuthors());
  }, [dispatch, postListPageNumber, numberOfPostsPerPage, visiblePostsIds]);

  useEffect(() => {
    dispatch(postDataActions.fetchTotalPostCount());
  }, [dispatch, totalPostCount]);

  const updatePostListPageNumber = (pageNumber) => {
    dispatch(actions.setPostListPageNumber(pageNumber));
  };

  const updateNumberOfPostsPerPage = (count) => {
    dispatch(actions.setNumberOfPostsPerPage(count));
  };

  const renderVisiblePosts = () => {
    const visiblePosts = visiblePostsIds.map((visiblePostId) => (
      <PostPreview key={visiblePostId} postId={visiblePostId} />
    ));
    return visiblePosts;
  };

  return (
    <div className={classes.root}>
      <Typography variant='h4' className={classes.title}>
        What's New?
      </Typography>
      <Paginator
        totalItemCount={totalPostCount}
        pageNumber={postListPageNumber}
        itemsPerPage={numberOfPostsPerPage}
        onChangePageNumber={updatePostListPageNumber}
        onChangeItemsPerPage={updateNumberOfPostsPerPage}
      />
      {renderVisiblePosts()}
    </div>
  );
};

export default HomePage;
