import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';
import Dashboard from './pages/Dashboard';
import Module from './pages/Module';
import Blogs from './pages/Blogs';
import Learning from './pages/Learning';
import Module1Q from './Question/Module1Q';
import Calculator from './pages/Calculator';
import Planner from './pages/Planner';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/module" element={<Module />} />
        <Route exact path="/blog" element={<Blogs />} />
        <Route exact path="/startlearning" element={<Learning/>}/>
        <Route exact path="/mod1q" element={<Module1Q/>}/>
        <Route exact path="/calculator" element={<Calculator/>}/>
        <Route exact path="/planner" element={<Planner/>}/>
      </Routes>
    </>
  );
}

export default App;
