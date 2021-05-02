import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

import {BrowserRouter as Router} from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Main/>
        <Footer />
      </div>
    </Router>
 
  );
};

export default App;
