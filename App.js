import React from 'react';
import './index.css';
/*import HelloDemo from './HelloDemo';
import CounterClass from './CounterClass'
import ChangeTextColor from './ChangeTextColor'
import Arrayobjtable from './Arrayobjtable';
import DigitalClock from './DigitalClock';
import {Route,Routes} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";*/
import DigitalClockDemo from './DigitalClockDemo';
import UseStateDemo from './UseStateDemo';
import BlogContextDemo from './BlogContextDemo';
const blogInfo={
  React:{
    post: "Learn useContext Hooks",
    author: "Varun K"
  },
  NodeJS:{
    post: "Node Commands",
    author: "Veena M"
  }
};
export const BlogContext=React.createContext(blogInfo);
export default function App() {
  return (
    <div className="App">
      {/*<HelloDemo/>*/}
      {/*<CounterClass/>*/}
      {/*<ChangeTextColor/>*/}
      {/*<Arrayobjtable/>*/}
      {/*<DigitalClock/>*/}
      {/*<Travel/>*/}
      {/*<DigitalClockDemo/>*/}
      {/*<UseStateDemo/>*/}
      {/*<Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="service" element={<Service/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>*/}
      <div>
        <h1>useContext() Demo</h1>
        <BlogContext.Provider value={blogInfo}>
          <BlogContextDemo/>
        </BlogContext.Provider>
      </div>
    </div>
  );
}


