import React, { useState } from 'react';

const RandomJoke = () => {
  const [joke, setJoke] = useState('');

  function handleFetch() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((json) => setJoke(json.value));
  }

  return (
    <>
      <button onClick={handleFetch}>Click for Joke</button>
      <p>{joke}</p>
    </>
  );
};

export default RandomJoke;
