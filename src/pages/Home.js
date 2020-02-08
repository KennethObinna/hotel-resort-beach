import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import  FeaturedRoom from "../components/FeaturedRoom";
  export default function Home() {
  return(

  <React.Fragment>
    <Hero hero="defaultHero">
      <Banner title="Luxurious rooms" subTitle="deluxe rooms starting at $299">
        <Link to="/" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
  <Services/>
  <FeaturedRoom/>
  
  </React.Fragment>
      
      )
}

//export default Home;
