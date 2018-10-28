import React, {useState, useEffect} from 'react';
import {container} from './App.module.scss';

const useTitle = newTitle => {
  useEffect(() => {
    document.title = newTitle;
  });
};

const useToggle = () => {
  const [isToggle, setToggle] = useState(false);

  return [isToggle, () => setToggle(!isToggle)];
};
const App = () => {
  const [isHidden, toggleHidden] = useToggle();
  useTitle(`It's ${isHidden ? 'HIdden' : 'Shown'}`);

  return (
    <span className={container}>
      <button onClick={toggleHidden}>{isHidden ? 'Show' : 'Hide'} About</button>
      {isHidden ? <h2>Hidden</h2> : <h1>Shown</h1>}
    </span>
  );
};

export default App;
