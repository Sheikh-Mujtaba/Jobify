import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import Apply from './pages/Apply';
import Login from './users/Login';
import Register from './users/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/jobs' element={<Jobs/>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/login' element={<Login/>}/>

          <Route path="/jobDetails/:id" element={<JobDetails />} /> {/* Match this route */}
          <Route path="/apply/:id" element={<Apply />} /> {/* Match this route */}



          <Route/>

        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
