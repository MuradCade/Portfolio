// import React from "react";
// import Navigation from "./components/Navigation";
// // import  Skill from "./components/Skill";
// // import {Link} from "react-router-dom";
// import {BrowserRouter,Route} from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//    <Navigation/>
//     </div>
//   );
// }



// export default App;
import React, { Suspense, lazy } from 'react';
import Navigation from './components/Navigation'
import Home from './components/Home';
// import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Skill = lazy(() => import('./components/Skill'));
const About = lazy(() => import('./components/About'));

const App = () => (
  <Router>
    <Navigation/>
    {/* <Home /> */}
    
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/skill" element={<Skill />} />
        <Route path="/About" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  </Router>
);




export default App;