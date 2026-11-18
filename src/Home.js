import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';
import JokeBox from './JokeBox';

function Home() {
  return (
    <div>
      <h1>Hello, Priscilla!</h1>
      <Greeting name="Priscilla" />
      <Counter />
      <JokeBox />
    </div>
  );
}

export default Home;
