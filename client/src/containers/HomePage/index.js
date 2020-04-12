import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = props => {
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get('/api/hello').then(response => setText(response.data));
  }, []);

  return (
    <div>
      Home
      <p>{text}</p>
    </div>
  );
};

export default HomePage;
