import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API_KEY

  render() {
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<News category="general" key="general" pageSize={9} apiKey={this.apiKey}/>}/>
          <Route path="/Business" element={<News category="business" key="business" pageSize={9} apiKey={this.apiKey}/>}/>
          <Route path="/Entertainment" element={<News category="entertainment" key="entertainment" pageSize={9} apiKey={this.apiKey}/>}/>
          <Route path="/Health" element={<News category="health" key="health" pageSize={9} apiKey={this.apiKey}/>}/>
          <Route path="/Science" element={<News category="science" key="science" pageSize={9} apiKey={this.apiKey}/>}/>
          <Route path="/Sports" element={<News category="sports" key="sports" pageSize={9} apiKey={this.apiKey}/>}/>
          <Route path="/Technology" element={<News category="technology" key="technology" pageSize={9} apiKey={this.apiKey}/>}/>
        </Routes>
      </Router>
    )
  }
};