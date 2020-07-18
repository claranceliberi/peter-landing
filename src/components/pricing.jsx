import React, { Component } from 'react';
import '../styles/pricing.scss'
import PricingCard from './priceCard';

class Pricing extends Component {
    state = { 
      pricings : [
        {
          id:1,
          plan:"individual",
          price:9,
          person:1,
          projects:10,
          features:100,
          storage:"20GB",
          color:"rgba(62,69,81,.7)" 
        },

        {
          id:2,
          plan:"startup",
          price:29,
          person:10,
          projects:100,
          features:200,
          storage:"100GB",
          color:"rgba(0,150,136,.7)"   
        },

        {
          id:3,
          plan:"enterprise",
          price:99,
          person:"10+",
          projects:"unlimited",
          features:"unlimited",
          storage:"1TB",
          color:"rgba(244,67,54,.7)"
        }
      ]
     }
    render() { 
        return ( 
            <section className="text-center py-5 darken-1 " id="pricing">
                <div className="container">
                  <div className="wow fadeIn">
                    <h2 className="h1 pt-5 pb-3">Our pricing plans</h2>
                    <p className="px-5 mb-5 pb-3 lead">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi,
                      veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.
                    </p>
                  </div>
                  <div className="row wow zoomIn">
                    {this.state.pricings.map(p => <PricingCard key={p.id} data={p}/>)}
                  </div>
                </div>
            </section>
         );
    }
}
 
export default Pricing;