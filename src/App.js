//import logo from './logo.svg';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React,{useState} from 'react';
          function App() {
            const [mode, setMode] = useState('light')
          const [alert, setAlert] = useState(null)

           const showAlert=(message,type)=>{
            setAlert({
              msg: message,
            Type:type
           })
          setTimeout(()=>{
          setAlert(null);
          },1500)
          }
             const toggleMode =() =>{
               if(mode==='light'){
                 setMode( 'dark')
                 document.body.style.backgroundColor='#042743';
                 showAlert("Dark mode has been enabled","success")
                 document.title='TextUtils- DarkMode';
                //  setInterval(()=>{
                //   document.title='TextUtils is Amazing';
                //  },1500)
                //  setInterval(()=>{
                //   document.title='install TextUtils now';
                //  },2000)
               }else{
                 setMode('light')
                 document.body.style.backgroundColor='white'
                 showAlert("Light mode has been enabled","success")
                 document.title='TextUtils- LightMode';
               }
             }

             return (
              <>
              <Router>
                <Navbar title="TextUtils" About="About TextUtils" mode={mode} Contact="Contact Admin" toggleMode={toggleMode} />
                <Alert alert={alert} />
                <Routes>
                  <Route exact path="/about" element={<About />} />
                  <Route path="/" element={<div className="container my-3"><Textform showAlert={showAlert} heading="Enter the Text to Analyze below" buttonType="UpperCase" buttonUse="LowerCase" buttonDemand="CamelCase" mode={mode} /></div>}/>
               </Routes>
              </Router>
            </>
                 );
               }

export default App;

