import React, { Component } from 'react';
import '../styles/profile.scss'

class Profile extends Component {


    state = { 

     }
    loadImg(img){
        const images = require.context('../images/', true);
        return images('./' + img);
    }
    render() { 
        const {name,title,desc,twitter,img} = this.props.profile


        return ( 
            <div className="col-lg-6 col-md-12 mb-5 wow fadeInLeft" data-wow-delay=".3s">
                <div className="col-md-6 float-left"><img className="img-fluid shadow rounded z-depth-1 mb-3" src={this.loadImg(img)} alt="team member"/></div>
                <div className="col-md-6 float-right">
                    <div className="h4">{name}</div>
                    <h6 className="font-bold blue-grey-text mb-4">{title}</h6>
                    <p className="grey-text">{desc}</p><a href="https://twitter.com" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter"></i><span className="ml-1">{twitter}</span></a>
                </div>
            </div>
         );
    }
}
 
export default Profile;