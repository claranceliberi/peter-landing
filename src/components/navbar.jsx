import React, { Component } from 'react';
import '../styles/navbar.scss'

class Navbar extends Component {


    state = {  }

    reactToScroll(t){
        const nav = document.getElementById('navbar')
        const top = Math.floor(t)
        const navbarVisipilityPosition = -Math.abs(5)
        // console.log(navbarVisipilityPosition)
        if(top <= navbarVisipilityPosition){
                nav.classList.add('my-colored')
                return 
            }
            nav.classList.remove('my-colored')
            // nav.classList.remove('my-shadow')
        
    }
    componentDidUpdate(){
        this.reactToScroll(this.props.top)
    }

    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar" id="navbar">
                <div className=" container"><a href="/" className="navbar-brand text-light"><strong>Material Landing</strong></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav ml-auto ">
                          <li className="nav-item "><a className="text-light nav-link active" href="#about">About</a></li>
                          <li className="nav-item "><a className="text-light nav-link" href="#projects">Projects</a></li>
                          <li className="nav-item "><a className="text-light nav-link" href="#pricing">Pricing</a></li>
                          <li className="nav-item "><a className="text-light nav-link" href="#team">Team</a></li>
                          <li className="nav-item "><a className="text-light nav-link" href="#contact">Contact</a></li>
                        </ul><a className="btn btn-primary btn-rounded my-0" href="https://templateflip.com/templates/material-landing"  rel="noopener noreferrer" target="_blank">Download</a>
                    </div>
                </div>
            </nav>
         );
    }
}
 
export default Navbar;