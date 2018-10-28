// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {Suspense, lazy, useState} from 'react';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => {
  const [isAboutHidden, setIsAboutHidden] = useState(false);
  return (
    <span>
      <button onClick={() => setIsAboutHidden(!isAboutHidden)}>
        {isAboutHidden ? 'Show' : 'Hide'} About
      </button>
      <a href="/">Home</a>
      {isAboutHidden ? null : <a href="/about">About</a>}
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Suspense>
      </Router>
    </span>
  );
};

export default App;
