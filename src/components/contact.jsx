import React, { Component } from 'react';
import "../styles/contact.scss"
import panaroma from '../images/panorama-3094696_1920.jpg'

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="contact" style={{backgroundImage:`url(${panaroma})`}}>
                <div className="black py-5">
                  <div className="container">
                    <div className="wow fadeIn">
                      <h2 className="h1 text-white pt-5 pb-3 text-center">Contact us</h2>
                      <p className="text-white px-5 mb-5 pb-3 lead text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate
                        esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.
                      </p>
                    </div>
                    <div className="card mb-5 wow fadeInUp" data-wow-delay=".4s">
                      <div className="card-body p-5">
                        <div className="row">
                          <div className="col-md-8">
                            <form action="https://formspree.io/youremail@example.com" method="POST">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="name">Your name</label>
                                    <input className="form-control" id="name" type="text" name="name" required="required"/>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="email">Your email</label>
                                    <input className="form-control" id="email" type="text" name="_replyto" required="required"/>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input className="form-control" id="subject" type="text" name="subject" required="required"/>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label htmlFor="message">Your message</label>
                                    <textarea className="form-control" id="message" name="message" required="required"></textarea>
                                  </div>
                                </div>
                              </div>
                              <div className="center-on-small-only mb-4">
                                <button className="btn btn-primary px-5 py-3 shadow ml-0" type="submit"><i className="fa fa-paper-plane-o mr-2"></i> Send</button>
                              </div>
                            </form>
                          </div>
                          <div className="col-md-4">
                            <ul className="list-unstyled text-center">
                              <li className="mt-4"><i className="fa fa-map-marker blue fa-2x"></i>
                                <p className="mt-2">140, City Center, New York, U.S.A</p>
                              </li>
                              <li className="mt-4"><i className="fa fa-phone blue fa-2x"></i>
                                <p className="mt-2">+ 01 234 567 89</p>
                              </li>
                              <li className="mt-4"><i className="fa fa-envelope blue fa-2x"></i>
                                <p className="mt-2">contact@company.com</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
         );
    }
}
 
export default Contact;