import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = ()=> {
  const [progress, setProgress] = useState(0);
  const [pageSize] = useState(7);
  const [apiKey] = useState(process.env.REACT_APP_NEWS_API);

  // pageSize = 7;
  // apiKey = process.env.REACT_APP_NEWS_API;

    return (
      <>
      {/* <Navbar/> */}
      {/* <News setProgress={setProgress}  pageSize={pageSize} country="in" category="sports" /> */}
      {/* <BrowserRouter> */}
      <div>
        <Router>

          <Navbar/>

          <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          />

          <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} apiKey={apiKey} country="in" category="general" />} ></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} apiKey={apiKey} country="in" category="business" />} ></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} apiKey={apiKey} country="in" category="entertainment" />} ></Route>
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} apiKey={apiKey} country="in" category="general" />} ></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} apiKey={apiKey} country="in" category="health" />} ></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} apiKey={apiKey} country="in" category="science" />} ></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} apiKey={apiKey} country="in" category="sports" />} ></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} apiKey={apiKey} country="in" category="technology" />} ></Route>
          </Routes>
        </Router>
      </div>
      {/* </BrowserRouter> */}
      </>
    )

}
export default App;
