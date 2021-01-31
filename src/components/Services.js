import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {

  state={
    services:[
      {
        icon:<FaCocktail/>,
        title:"Free Cocktails",
        info:'Dummy Text 1'
      },
      {
        icon:<FaHiking />,
        title:"Hiking",
        info:'Dummy Text 2'
      },
      {
        icon:<FaShuttleVan />,
        title:"My Shuttle Van",
        info:'Dummy Text 3'
      },
      {
        icon:<FaBeer />,
        title:"Free Beer for All",
        info:'Dummy Text 4'
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}
