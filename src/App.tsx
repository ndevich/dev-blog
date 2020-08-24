import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/page/router';
import './app.css';
import Header from './components/header';
import Footer from './components/footer';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <div>
        <Routes />
      </div>
      <Footer />
    </Router>
  </div>
);

export default App;
