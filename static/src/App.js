import React, { Component } from 'react';
import Parallax from './Components/Home/ParallaxEffect';
import { StickyContainer, Sticky } from 'react-sticky';
import Collapsebar from './Components/Home/Collapsebar';
import About from './Components/About/About'
import ProjectList from './Components/OngoingProjects/OngoingProject';
import Joinform from './Components/joinNewProjects/joinform.js'
import {BrowserRouter, Route} from 'react-router-dom';
import Blogs from './Components/Blogs/Blogs';

import './topography.css';



class App extends Component {

 constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(e) {
   const nav1=document.querySelector("#nav1");
   const nav2=document.querySelector('#nav2');
  
   if(window.scrollY>105){
   nav1.style.transform="translateX(100%)";
   nav2.style.transform="translateX(0%)";


}
  
else{
   nav1.style.transform="translateX(0%)";
   nav2.style.transform="translateX(100%)";
}
}
  render() {
  
    return (


      <BrowserRouter>
        <switch>

        <Route path="/" component={Parallax} exact/>
        <Route path="/About" component={About} />
        <Route path="/OngoingProject" component={ProjectList} />
        <Route path="/JoinNew" component={Joinform} />
        <Route path="/Blogs" component={Blogs} />

        </switch>
        </BrowserRouter>
      
      
    );
  }
}

export default App;
