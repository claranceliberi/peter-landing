import React, { Component } from 'react';
import '../styles/priceCard.scss'
import arch from  '../images/architecture.jpg'

class PricingCard extends Component {
    state = { 

     }

    render() { 
      const {features,price,plan,storage,projects,person,color} = this.props.data

        return ( 
          <div className="col-lg-4 col-md-12 mb-5">

            <div className="card card-image shadow border-0" style={{backgroundImage:`url(${arch})`}}>
                    <div className="text-white text-center pricing-card d-flex align-items-center py-10 px-3 rounded" style={{backgroundColor:color}}>
                      <div className="card-body">
                        <div className="h5">{plan}</div>
                        <div className="py-5"><sup className="display-4">$</sup><span className="display-1">{price}</span><span className="display-4">/m</span></div>
                        <ul className="list-unstyled">
                          <li>
                            <p><strong>{person}</strong> person</p>
                          </li>
                          <li>
                            <p><strong>{projects}</strong> projects</p>
                          </li>
                          <li>
                            <p><strong>{features}</strong> features</p>
                          </li>
                          <li>
                            <p><strong>{storage}</strong> storage</p>
                          </li>
                        </ul><a href="/" className="btn btn-outline-light"> Buy now</a>
                      </div>
                    </div>
                  </div>
              </div>
         );
    }
}
 
export default PricingCard;