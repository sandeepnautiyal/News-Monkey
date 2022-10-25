import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItem from './components/NewsItem';

function App() {
  const [state,setState]=useState({progress:0})
 
  let setProgress=(progress)=>{
setState({progress:progress})
  }
  // const apiKey='a70e00951ff94e068047d539bfd38da7'
  const apiKey=process.env.REACT_APP_API_KEY;
  const pageSize=25;
      return (
    <div className="App">
      <Navbar/>
      <LoadingBar 
        progress={state.progress}
      color='red'/>
      
      <Routes>
        <Route exact path='/' element={<News key='/' apiKey={apiKey} setProgress={setProgress} category='General' pageSize={pageSize}/>}/>
        <Route exact path='/business' element={<News key='business' apiKey={apiKey} setProgress={setProgress} category='Business' pageSize={pageSize}/>}/>
        <Route exact path='/entertainment' element={<News  key='entertainment'setProgress={setProgress}apiKey={apiKey} category='Entertainment' pageSize={pageSize}/>}/>
        <Route exact path='/general' element={<News key='general' setProgress={setProgress} category='General' apiKey={apiKey} pageSize={pageSize}/>}/>
        <Route exact path='/health' element={<News key='health' setProgress={setProgress} category='Health' apiKey={apiKey} pageSize={pageSize}/>}/>
        <Route exact path='/science' element={<News key='science' setProgress={setProgress} category='Science' apiKey={apiKey} pageSize={pageSize}/>}/>
        <Route exact path='/sports' element={<News key='sports' setProgress={setProgress} category='Sports' apiKey={apiKey} pageSize={pageSize}/> }/>
        <Route exact path='/technology' element={<News key='technology' setProgress={setProgress} category='Technology' apiKey={apiKey} pageSize={pageSize}/>}/>
        {/* <Route exact path='/science' element={<News key='science' setProgress={setProgress} category='science' apiKey={apiKey} pageSize={pageSize}/>}/> */}
      </Routes>
       </div>
  );
}

export default App;
