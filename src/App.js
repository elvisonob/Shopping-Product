import React, { Fragment } from 'react';
import Header from './components/Layout/Header';
import Food from './components/Food/Food';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Food />
      </main>
    </Fragment>
  );
};

export default App;
