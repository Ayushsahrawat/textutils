import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';   
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  
} from "react-router-dom";
 

function App() {

  const [mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
      // document.title = "textUtils-dark mode";
      // setInterval(() => {
      //   document.title = "textUtils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = " install textUtils now";
      // }, 1500);`
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      // document.title = "textUtils-light mode";
      
    }
  }

  return (
    <>
    <Router>
    <Navbar title = "Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes> 
        <Route exact path='/textutils' element ={<Textform showAlert={showAlert} heading = "Enter the text to analyze" mode={mode}/>}/>
        <Route exact path= '/about' element = {<About mode={mode}/>} />
       </Routes>
      {/* <Textform showAlert={showAlert} heading = "Enter the text to analyze" mode={mode}/> */}
    </div>
    </Router>
    </>
  );
}

export default App;
