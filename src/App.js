import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./components/Router/Router";

function App() {
  return (
    <div className="App">
      <Header />
      <Router/>
      <Footer />
    </div>
  );
}

export default App;
