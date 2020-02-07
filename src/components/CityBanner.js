import React from 'react'

function CityBanner(props) {
  return (
    <div className="jumbotron jumbotron-city jumbotron-fluid">
      {
        props.city && (
          <div className="container text-center">
            <img className="mb-4" src={props.city.country_flag_url} alt="country flag" />
            <h1 className="display-4 font-weight-bold">{props.city.name}</h1>
            <h5 className="">{props.city.country_name} </h5>
          </div>)
      }
    </div>
  )
}

export default CityBanner