import React from 'react';
import PropTypes from 'prop-types';

const PostPreview = (props) => {
  return <p>{props.id}</p>;
};

PostPreview.propTypes = {
  id: PropTypes.any.isRequired,
};

export default PostPreview;
