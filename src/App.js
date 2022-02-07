import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import { makeStyles } from "@material-ui/core"

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#1c1c1c',
      color: 'white',
      minHeight: '100vh',
    },
  }));

function App() {

  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        <Route path='/' component={Homepage} exact />
        <Route path='/coins/:id' component={CoinPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
