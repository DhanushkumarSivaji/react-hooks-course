import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import UseState from './components/useState';
import UseReducer from './components/useReducer';
import UseCallback from './components/useCallback';
import UseContext from './components/useContext';
import UseEffect from './components/useEffect';
import UseLayoutEffect from './components/useLayoutEffect';
import UseMemo from './components/useMemo';
import UseImperativeHandle from './components/useImperativeHandle';
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
            <li>
              <Link to="/usecallback">usecallback</Link>
            </li>
            <li>
              <Link to="/usecontext">usecontext</Link>
            </li>
            <li>
              <Link to="/useeffect">useeffect</Link>
            </li>
            <li>
              <Link to="/uselayouteffect">uselayouteffect</Link>
            </li>
            <li>
              <Link to="/usememo">usememo</Link>
            </li>
            <li>
              <Link to="/useimperativehandle">useimperativehandle</Link>
            </li>
          </ul>
        </nav>
    </div>
      <Routes>
          <Route exact path="/usestate" element={<UseState/>} />
          <Route exact path="/usereducer" element={<UseReducer/>} />
          <Route exact path="/usecallback" element={<UseCallback/>} />
          <Route exact path="/usecontext" element={<UseContext/>} />
          <Route exact path="/useeffect" element={<UseEffect/>} />
          <Route exact path="/uselayouteffect" element={<UseLayoutEffect/>} />
          <Route exact path="/usememo" element={<UseMemo/>} />
          <Route exact path="/useimperativehandle" element={<UseImperativeHandle/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
