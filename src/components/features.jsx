import React, { Component } from 'react';
import '../styles/features.scss'

class Features extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="row no-gutters" id="features">
                <div className="col-lg-3 col-md-6 col-sm-12 bg-deep-purple lighten-1 ">
                  <div className="p-5 text-center wow zoomIn  text-white" data-wow-delay=".1s"><i className="fa fa-line-chart fa-2x"></i>
                    <div className="h5 mt-3">Agile Frameworks</div>
                    <p className="mt-5">Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 bg-purple lighten-1 ">
                  <div className="p-5 text-center wow zoomIn text-white" data-wow-delay=".3s"><i className="fa fa-industry fa-2x"></i>
                    <div className="h5 mt-3">Corporate Strategy</div>
                    <p className="mt-5">Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 bg-teal lighten-1 ">
                  <div className="p-5 text-center wow zoomIn text-white" data-wow-delay=".5s"><i className="fa fa-users fa-2x"></i>
                    <div className="h5 mt-3"> Workplace Diversity</div>
                    <p className="mt-5">Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 bg-light-blue lighten-1 ">
                  <div className="p-5 text-center wow zoomIn text-white" data-wow-delay=".7s"><i className="fa fa-bullhorn fa-2x"></i>
                    <div className="h5 mt-3"> Survival Strategies</div>
                    <p className="mt-5">Bring to the table win-win survival strategies to ensure proactive domination.</p>
                  </div>
                </div>
            </section>
         );
    }
}
 
export default Features;