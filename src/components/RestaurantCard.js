import React from 'react'
import { Link } from 'react-router-dom'

function RestaurantCard(props) {
  return (
    <div className="col-md-12 mt-3">
      <div className="card restaurant-card">
        <div className="card-header">
          <div className="row align-items-center">
            <div className="col-md-2">
              <img className="img-responsive" style={{ height: "100px", borderRadius: "5px" }} src={props.restaurant.thumb} alt="resto-thumb" />
            </div>
            <div className="col-md-7">
              <p className="card-title resto-name my-0">{props.restaurant.name}</p>
              <p className="h5 mb-1" >{props.restaurant.location.locality}</p>
              <p className="h5 text-muted" >{props.restaurant.location.address}</p>
            </div>
            <div className="col-md">
              <p className="mb-1" ><span className="badge text-white px-2 py-2 mr-2" style={{ fontSize: "11px", backgroundColor: `#${props.restaurant.user_rating.rating_color}` }}><i className="fas fa-star mr-2"></i>{props.restaurant.user_rating.aggregate_rating}</span> {props.restaurant.user_rating.votes} Votes</p>
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-sm table-borderless">
            <tr>
              <td width="20%" >Cuisines</td>
              <th scope="row">{props.restaurant.cuisines}</th>
            </tr>
            <tr>
              <td width="20%" >Cost for Two</td>
              <th scope="row">{props.restaurant.currency + ' ' + props.priceFormat(props.restaurant.average_cost_for_two)}</th>
            </tr>
            <tr>
              <td width="20%" >Open Hours</td>
              <th scope="row">{props.restaurant.timings}</th>
            </tr>
          </table>
        </div>

        <div className="card-footer">
          <Link to={`/restaurant/${props.restaurant.id}`} style={{ textDecoration: "none" }} >
            <button className="btn btn-block btn-outline-info" type="button">View Restaurant Details</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard
