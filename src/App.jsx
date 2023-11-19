import React from 'react';
import Header from './Component.Header/Header';
import'./App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Bio from './pages/Bio';
import Qualification from './pages/Qualification';
import Awards from './pages/Awards';
import Hobies from './pages/Hobies';
import Interest from './pages/Interest';
//import language from './pages/Language';
import Skills from './pages/Skills';
import WorkEcperience from './pages/WorkEcperience';
function App() {
  return (
  <>
    <BrowserRouter>
     <div className="App">
       {/* <h1>Working</h1>
       <h1>info</h1> */}
     </div >
     <div className='nav'>
      <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/Bio'>My Bio</Link></li>
      <li><Link to='/Qualification'>My Qualification</Link></li>
      <li><Link to='/Awards'>My Awards</Link></li>
      <li><Link to='/Hobies'>My Hobbies</Link></li>
      <li><Link to='/Interest'>My Interest</Link></li>
      <li><Link to='/Skills'>My Skills</Link></li>
      <li><Link to='/WorkEcperience'>My WorkEcperience</Link></li>
      
      </ul>
     </div >
    
    <Routes>
     <Route path='/Bio' element={<Bio/>}/>
    <Route path='/Qualification' element={<Qualification/>}/>
    <Route path='/Awards' element={<Awards/>}/>
    <Route path='/Hobies' element={<Hobies/>}/>
    <Route path='/Interest' element={<Interest/>}/>
    {/* <Route path='/' element={<Language/>}/> */}
    <Route path='/Skills' element={<Skills/>}/>
    <Route path='/WorkEcperience' element={<WorkEcperience/>}/>

      </Routes>
    </BrowserRouter>
    <hr /> 
    <div className='img'><img src="ali.jpg" width={300} alt="ALI HASSAN" /></div>
       <Header/>
    </>
  )
}

export default App
