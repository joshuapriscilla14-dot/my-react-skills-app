import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';
import JokeBox from './JokeBox';

function Home(props) {
  return (
    <div>
      <h1>Hello, Priscilla!</h1>
      <p>You've learned {props.skillCount} skills so far.</p>
      <Greeting name="Priscilla" />
      <Counter />
      <JokeBox />
    </div>
  );
}

export default Home;