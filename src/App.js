import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import UseState from './components/useState';
import UseReducer from './components/useReducer';
import './App.css';

function App() {
  return (
    <>

    <Router>
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/usestate">usestate</Link>
            </li>
            <li>
              <Link to="/usereducer">usereducer</Link>
            </li>
          </ul>
        </nav>
    </div>
      <Routes>
          <Route exact path="/usestate" element={<UseState/>} />
          <Route exact path="/usereducer" element={<UseReducer/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
