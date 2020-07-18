import React, { Component } from 'react';
import '../styles/projects.scss'
import kual from '../images/kuala-lumpur.jpg'
import sf from '../images/san-francisco.jpg'

class Projects extends Component {
    state = {  }
    render() { 
        return ( 

            <section className="py-5" id="projects">
                <div className="container">
                  <div className="wow fadeIn">
                    <h2 className="text-center h1 my-4">Our best projects</h2>
                    <p className="px-5 mb-5 pb-3 lead blue-grey-text text-center">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <div className="row wow fadeInLeft" data-wow-delay=".3s">
                    <div className="col-lg-6 col-xl-5 pr-lg-5 pb-5"><img className="img-fluid shadow rounded z-depth-2" src={kual} alt="scy crapper"/></div>
                    <div className="col-lg-6 col-xl-7 pl-lg-5 pb-4">
                      <div className="row mb-3">
                        <div className="col-1 mr-1"><i className="fa fa-book fa-2x text-info"></i></div>
                        <div className="col-10">
                          <h5 className="font-bold">Education</h5>
                          <p className="grey-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda
                            voluptate velit.
                          </p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-1 mr-1"><i className="fa fa-code fa-2x text-danger"></i></div>
                        <div className="col-10">
                          <h5 className="font-bold">Technology</h5>
                          <p className="grey-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda
                            voluptate velit.
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1 mr-1"><i className="fa fa-money fa-2x text-deep-purple"></i></div>
                        <div className="col-10">
                          <h5 className="font-bold">Finance</h5>
                          <p className="grey-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda
                            voluptate velit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr/>
                  <div className="row pt-5 wow fadeInRight" data-wow-delay=".3s">
                    <div className="col-lg-6 col-xl-7 mb-3">
                      <div className="row mb-3">
                        <div className="col-1 mr-1"><i className="fa fa-bar-chart fa-2x text-indigo"></i></div>
                        <div className="col-10">
                          <h5 className="font-bold">Marketing</h5>
                          <p className="grey-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda
                            voluptate velit.
                          </p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-1 mr-1"><i className="fa fa-music fa-2x text-pink"></i></div>
                        <div className="col-10">
                          <h5 className="font-bold">Entertainment</h5>
                          <p className="grey-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda
                            voluptate velit.
                          </p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-1 mr-1"><i className="fa fa-smile-o fa-2x text-blue"></i></div>
                        <div className="col-10">
                          <h5 className="font-bold">Communication</h5>
                          <p className="grey-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda
                            voluptate velit.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-5 mb-3"><img className="img-fluid rounded shadow z-depth-2" src={sf} alt="sky crapper"/></div>
                  </div>
                </div>
            </section>

         );
    }
}
 
export default Projects;