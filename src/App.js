import React,{lazy,Suspense} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import UseState from './components/useState';
import UseReducer from './components/useReducer';
import UseCallback from './components/useCallback/test';
import UseContext from './components/useContext';
import UseEffect from './components/useEffect';
import UseLayoutEffect from './components/useLayoutEffect';
import UseMemo from './components/useMemo/useMemo';
import UseImperativeHandle from './components/useImperativeHandle';
import ClosuresInReact from './components/closures';
import Form from './components/form/form';
import Portal from './components/portal';
import HOC from './components/hoc';
import UncontrolledComponents from './components/uncontrolledComponents';
import PropsDrilling from './components/propsDrilling';
import Debounce from './components/debounce';
import Throtlling from './components/throttling';
import ClassComponents from './components/classComponents';
import NestedFolder from './components/nestedFolder';
// import Api from './components/api';
import './App.css';


const APICOMPONENT = lazy(() => import('./components/api'))

function App() {

  return (
    <>
    <Portal/>
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
            <li>
              <Link to="/closures">closures</Link>
            </li>
            <li>
              <Link to="/form">form</Link>
            </li>
            <li>
              <Link to="/api">Api</Link>
            </li>
            <li>
              <Link to="/hoc">HOC</Link>
            </li>
            <li>
              <Link to="/unc">UncontrolledComponents</Link>
            </li>
            <li>
              <Link to="/props">PropsDrilling</Link>
            </li>
            <li>
              <Link to="/debounce">Debounce</Link>
            </li>
            <li>
              <Link to="/throtlling">Throtlling</Link>
            </li>
            <li>
              <Link to="/class">ClassComponents</Link>
            </li>
            <li>
              <Link to="/nested">NestedFolder</Link>
            </li>
          </ul>
        </nav>
    </div>
    <Suspense fallback='Loading....'>
      <Routes>
          <Route exact path="/usestate" element={<UseState/>} />
          <Route exact path="/usereducer" element={<UseReducer/>} />
          <Route exact path="/usecallback" element={<UseCallback/>} />
          <Route exact path="/usecontext" element={<UseContext/>} />
          <Route exact path="/useeffect" element={<UseEffect/>} />
          <Route exact path="/uselayouteffect" element={<UseLayoutEffect/>} />
          <Route exact path="/usememo" element={<UseMemo/>} />
          <Route exact path="/useimperativehandle" element={<UseImperativeHandle/>} />
          <Route exact path="/closures" element={<ClosuresInReact/>} />
          <Route exact path="/form" element={<Form/>} />
          <Route exact path="/api" element={<APICOMPONENT/>} />
          <Route exact path="/hoc" element={<HOC/>} />
          <Route exact path="/unc" element={<UncontrolledComponents/>} />
          <Route exact path="/props" element={<PropsDrilling/>} />
          <Route exact path="/debounce" element={<Debounce/>} />
          <Route exact path="/throtlling" element={<Throtlling/>} />
          <Route exact path="/class" element={<ClassComponents/>} />
          <Route exact path="/nested" element={<NestedFolder/>} />
      </Routes>
      </Suspense>
    </Router>
    </>
  );
}

export default App;
