import React from 'react'
import {Link} from 'react-router-dom'

function CityCard(props) {
  return (
    <div className="col-md-4 col-sm-6 mb-3">
      <div className="card h-100 bg-light py-2 px-2">
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <h6 className="card-title">{props.country_name}</h6>
          <img src={props.country_flag} alt="flag" width="20" className="mb-4"/>
          <br/>
          <Link to={`/city/${props.city_id}`} className="card-text">See restaurants in {props.name} </Link>
        </div>
      </div>
    </div>
  )
}

export default CityCard
