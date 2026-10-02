import React from 'react';
import ReactDOM from 'react-dom/client';
import Greeting from './Greeting';
import Counter from './Counter';
import SkillsList from './SkillsList';
import JokeBox from './JokeBox';

function App() {
  const name = 'Priscilla';
  const skillCount = 5;

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You've learned {skillCount} skills so far.</p>
      <Greeting name="Priscilla" />
      <Counter />
      <SkillsList />
      <JokeBox />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
