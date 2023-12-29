//import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

 
const App=()=> {
 const pageSize='5';
 const apiKey="45558e6d38264375b7ce30d425861fe5"
   
  // //  state={
  // //   progress:0
  // //  }

  // setProgress=(progress)=>{
  //    this.setState({progress:progress})
  //  }
   const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route  path="/home"  element={<News setProgress={setProgress} apiKey={apiKey} key="home" pageSize={pageSize} country="in" category="General"/>}/> 
          <Route  path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="Business"/> }/> 
          <Route  path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="in" category="Entertainment"/>}/>  
          <Route  path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="General"/>}/>  
          <Route  path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country="in" category="Health"/>}/>  
          <Route  path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country="in" category="Science"/>}/>  
          <Route  path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="in" category="Sports"/>}/>  
          <Route  path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country="in" category="Technology"/>}/>  
        </Routes>
        </Router>
      </div>
    )
  
}

export default App