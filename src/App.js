import React, { Component } from 'react';
import './App.scss';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import WOW from 'wowjs'
import Features from './components/features';
import About from './components/about';
import Projects from './components/projects';
import Pricing from './components/pricing';
import Team from './components/team';
import Contact from './components/contact';
import Footer from './components/footer';


class App extends Component {
  state = {  }
  componentDidMount() {
    new WOW.WOW({live:false}).init()
    window.addEventListener('scroll',this.handleEvent)
  }
  handleEvent = (e)=> {
    // console.log(e)
  }
  render() { 
    return (
    <React.Fragment>
      <Home />
      <main>
        <Features />
        <About />
        <Projects />
        <Pricing />
        <Team />
        <Contact />
        <Footer />
      </main>
    </React.Fragment>
    );
  }
}
 
export default App;