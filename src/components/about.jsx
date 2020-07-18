import React, { Component } from 'react';
import '../styles/about.scss'

class About extends Component {
    state = {  }
    render() { 
        return ( 

            <section className="text-center py-5 grey lighten-4" id="about">
              <div className="container">
                <div className="wow fadeIn">
                  <h2 className="h1 pt-5 pb-3">Why work with us?</h2>
                  <p className="px-5 mb-5 pb-3 lead blue-grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-r wow fadeInUp" data-wow-delay=".3s"><i className="fa fa-dashboard fa-3x text-warning"></i>
                    <h3 className="h4 mt-3">Design</h3>
                    <p className="mt-3 blue-grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti
                      hic.
                    </p>
                  </div>
                  <div className="col-md-4 mb-r wow fadeInUp" data-wow-delay=".4s"><i className="fa fa-comments-o fa-3x text-info"></i>
                    <h3 className="h4 mt-3">Feedback</h3>
                    <p className="mt-3 blue-grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti
                      hic.
                    </p>
                  </div>
                  <div className="col-md-4 mb-r wow fadeInUp" data-wow-delay=".5s"><i className="fa fa-cubes fa-3x text-danger"></i>
                    <h3 className="h4 mt-3">Execution</h3>
                    <p className="mt-3 blue-grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti
                      hic.
                    </p>
                  </div>
                </div>
              </div>
            </section>

         );
    }
}
 
export default About;