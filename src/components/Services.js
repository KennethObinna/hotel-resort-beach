import React, { Component } from "react";
import Title from "../components/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  constructor(props) {
    super(props);
  this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: "Free cocktail",
          info:
            "Kenneth nkwoji learning react js for the fisrt time. We commend him to continue and also get ready for angular 8"
        },
        {
          icon: <FaHiking />,
          title: "Free Hiking",
          info:
            "Kenneth nkwoji learning react js for the fisrt time. We commend him to continue and also get ready for angular 8"
        },
        {
          icon: <FaShuttleVan />,
          title: "Free Shuttle",
          info:
            "Kenneth nkwoji learning react js for the fisrt time. We commend him to continue and also get ready for angular 8"
        },
        {
          icon: <FaBeer />,
          title: "Strongest Beer",
          info:
            "Kenneth nkwoji learning react js for the fisrt time. We commend him to continue and also get ready for angular 8"
        }
      ]
    };
  }

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
{this.state.services.map((item,index)=>{
return <article key={index}>
<span>{item.icon}</span>
<h6>{item.title}</h6>
<p>{item.info}</p>
</article>
})}
        </div>
      </section>
    );
  }
}
