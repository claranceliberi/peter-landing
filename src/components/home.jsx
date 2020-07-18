import React, { Component } from 'react';
import Navbar from './navbar';
import '../styles/home.scss';

class Home extends Component {
    state = { 
      top : 0
     }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = (e)=>{
        const nav = document.getElementById('intro')
        const sP = nav.getBoundingClientRect()
        this.setState({top:sP.top})
    }


    render() { 
        return (
            <header>
                <Navbar top={this.state.top}/>
                <section className="view hm-gradient" id="intro">
                    <div className="full-bg-img d-flex align-items-center">
                      <div className="container">
                        <div className="row  no-gutters">
                          <div className="col-md-10 col-lg-6 text-center text-md-left margins">
                            <div className="text-white">
                            <div className="wow fadeInLeft" data-wow-delay="0.3s">
                                <h1 className="h1-responsive font-bold mt-sm-5">Your Success is Our Mission.</h1>
                                <div className="h6">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                                    dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                                    iste.
                                </div>
                            </div><br/>
                                <div className="wow fadeInLeft" data-wow-delay="0.3s"><a  className="btn btn-light text-dark font-bold ml-0 pl-3 pr-3 pt-2 pb-2 m-2" href="https://www.youtube.com/watch?v=60ItHLz5WEA"  rel="noopener noreferrer" target="_blank"><i className="fa fa-play mr-1"></i> View Demo</a><a  className="btn btn-outline-light" href="/">Learn more</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </section>
            </header>
            
         );
    }
}
 
export default Home;