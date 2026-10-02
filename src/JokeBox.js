import React, { useState, useEffect } from 'react';

function JokeBox() {
  const [joke, setJoke] = useState('Loading joke...');

  useEffect(function () {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setJoke(data.value);
      })
      .catch(function (error) {
        setJoke("Couldn't load a joke. Try again!");
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Random Joke</h2>
      <p>{joke}</p>
    </div>
  );
}

export default JokeBox;
