
import React, { Component } from 'react';
import "../styles/footer.scss"

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer className="container-fluid p-0 m-0" id="footer">
            <div className="container-fluid upper">
              <div className="row">
                <div className="col">
                  <div className="flex-center text-center py-3 text-white"><a href="/" className="px-3"><i className="fa fa-facebook fa-lg text-white"></i></a><a href="/" className="px-3"><i className="fa fa-twitter fa-lg text-white"></i></a><a href="/" className="px-3"><i className="fa fa-google-plus fa-lg text-white"></i></a><a className="px-3" href="/"><i className="fa fa-linkedin fa-lg text-white"></i></a></div>
                </div>
              </div>
            </div>
            <div className="container-fluid lower py-2">
              <div className="container-fluid text-center text-white-50">
                <p>&copy; <a className="text-white" href="/">Material Landing</a> - Design: <a className="text-white" href="/" target="_blank">Liberi Ntwari</a></p>
              </div>
            </div>
          </footer>
         );
    }
}
 
export default Footer;