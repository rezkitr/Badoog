import React from 'react'
import Scroll from 'react-scroll'
import bannerImage from '../assets/images/welcome-banner.jpg'

const ScrollLink = Scroll.Link

function WelcomeBanner() {
  return (
    <div className="jumbotron jumbotron-home jumbotron-fluid" style={{ backgroundImage: `url(${bannerImage})` }} >
      <div className="container text-center">
        <h1 className="display-4">Find The Best Restaurant</h1>
        <hr className="mt-4" />
        <blockquote className="mt-4" >First We Eat, Then We Do Everything Else</blockquote>
        <ScrollLink
          to="search-section"
          spy={true}
          smooth={true}
          duration={500}
        >
          <button className="btn btn-secondary my-btn mt-5">SEARCH NOW</button>
        </ScrollLink>
      </div>
    </div>
  )
}

export default WelcomeBanner
