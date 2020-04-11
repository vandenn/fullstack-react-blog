import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = props => {
  const [text, setText] = useState('');

  useEffect(() => {
    // axios.get('/api/hello').then(response => setText(response.data));
    axios
      .post('/api/posts', {
        title: 'Hello there!',
        body: 'Salutation message here.',
        uid: 1,
        username: 'Vandenn'
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      Home
      <p>{text}</p>
    </div>
  );
};

export default HomePage;
