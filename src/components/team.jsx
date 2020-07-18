import React, { Component } from 'react';
import '../styles/team.scss'
import Profile from './profile';

class Team extends Component {
    state = { 
        profiles:[
            {
                id:1,
                name:"Nicole West",
                title:"Lead Designer",
                desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.",
                twitter:"@nicolewest",
                img:"woman-1.jpg",
            },
            {
                id:2,
                name:"Hannah Cruz",
                title:"Photographer",
                desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.",
                twitter:"@hannahcruz",
                img:"woman-2.jpg",
            },
            {
                id:3,
                name:"Mark Hall",
                title:"Web Developer",
                desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.",
                twitter:"@hannahcruz",
                img:"man-1.jpg",
            },
            {
                id:4,
                name:"Vincent Harris",
                title:"Web Developer",
                desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.",
                twitter:"@vincentharris",
                img:"man-2.jpg",
            },
        ]
     }
    render() { 
        return ( 
            <section className="py-5" id="team">
                <div className="container">
                    <div className="wow fadeIn">
                    <h2 className="h1 pt-5 pb-3 text-center">Our team members</h2>
                    <p className="px-5 mb-5 pb-3 lead text-center blue-grey-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate
                        esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.
                    </p>
                    </div>
                    <div className="row mb-lg-4 center-on-small-only">
                    {this.state.profiles.map(d => <Profile key={d.id} profile={d}/> )}
                    </div>
                </div>
            </section>

         );
    }
}
 
export default Team;