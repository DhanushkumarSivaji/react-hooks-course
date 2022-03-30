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
import PreventRerender from './components/preventingRerenders';
import Api from './components/api';
import RenderProp from './components/renderPropPattern';
import Example from './components/sideEffects/functionalComponents/example3';
import PropTesting from './components/propTypes';
import StyleTheComponents from './components/styledComponents';
import CssModules from './components/cssmodules';
import './App.css';


// const Api = lazy(() => import('./components/api'))
// const UseState = lazy(() => import('./components/useState'))
// const UseReducer = lazy(() => import('./components/useReducer'))
// const UseCallback = lazy(() => import('./components/useCallback/test'))
// const UseContext = lazy(() => import('./components/useContext'))
// const UseEffect = lazy(() => import('./components/useEffect'))
// const UseLayoutEffect = lazy(() => import('./components/useLayoutEffect'))
// const UseMemo = lazy(() => import('./components/useMemo/useMemo'))
// const UseImperativeHandle = lazy(() => import('./components/useImperativeHandle'))
// const ClosuresInReact = lazy(() => import('./components/closures'))
// const Form = lazy(() => import('./components/form/form'))
// const Portal = lazy(() => import('./components/portal'))
// const HOC = lazy(() => import('./components/hoc'))
// const UncontrolledComponents = lazy(() => import('./components/uncontrolledComponents'))
// const PropsDrilling = lazy(() => import('./components/propsDrilling'))
// const Debounce = lazy(() => import('./components/debounce'))
// const Throtlling = lazy(() => import('./components/throttling'))
// const ClassComponents = lazy(() => import('./components/classComponents'))
// const NestedFolder = lazy(() => import('./components/nestedFolder'))
// const PreventRerender = lazy(() => import('./components/preventingRerenders'))
// const RenderProp = lazy(() => import('./components/renderPropPattern'))

function App() {

  return (
    <>
    {/* <Portal/> */}
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
            <li>
              <Link to="/rerender">PreventRerender</Link>
            </li>
            <li>
              <Link to="/side-effects">SideEffects</Link>
            </li>
            <li>
              <Link to="/prop">PropTesting</Link>
            </li>
            <li>
              <Link to="/style">StyleTheComponents</Link>
            </li>
            <li>
              <Link to="/css">CssModules</Link>
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
          <Route exact path="/api" element={<Api/>} />
          <Route exact path="/hoc" element={<HOC/>} />
          <Route exact path="/unc" element={<UncontrolledComponents/>} />
          <Route exact path="/props" element={<PropsDrilling/>} />
          <Route exact path="/debounce" element={<Debounce/>} />
          <Route exact path="/throtlling" element={<Throtlling/>} />
          <Route exact path="/class" element={<ClassComponents/>} />
          <Route exact path="/nested" element={<NestedFolder/>} />
          <Route exact path="/rerender" element={<PreventRerender/>} />
          <Route exact path="/render-prop" element={<RenderProp/>} />
          <Route exact path="/side-effects" element={<Example/>} />
          <Route exact path="/prop" element={<PropTesting/>} />
          <Route exact path="/style" element={<StyleTheComponents/>} />
          <Route exact path="/css" element={<CssModules/>} />
      </Routes>
      </Suspense>
    </Router>
    </>
  );
}

export default App;
