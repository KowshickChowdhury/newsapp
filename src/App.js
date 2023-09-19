import './App.css';
import React, { Component } from 'react'
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

export default class App extends Component {

  pageSize = 7;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress : 0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <>
      {/* <Navbar/> */}
      {/* <News setProgress={this.setProgress}  pageSize={this.pageSize} country="in" category="sports" /> */}
      {/* <BrowserRouter> */}
      <div>
        <Router>

          <Navbar/>

          <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
          />

          <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="general" />} ></Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="business" />} ></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="entertainment" />} ></Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="general" />} ></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="health" />} ></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="science" />} ></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="sports" />} ></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="technology" />} ></Route>
          </Routes>
        </Router>
      </div>
      {/* </BrowserRouter> */}
      </>
    )
  }
}

