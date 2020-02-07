import React from 'react'

function RestaurantProfile(props) {
  return (
    <div className="row">
      <div className="col-md pt-5">
        {
          props.restaurant ? (
            <div className="card mb-3">
              <img className="card-img-top" height="400px" src={props.restaurant.featured_image} alt="restpic" />
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between align-items-center" >
                  <p className="card-title resto-name" style={{ fontSize: "48px" }}>{props.restaurant.name}</p>
                  <p className="mb-1" ><span className="badge text-white px-2 py-2 mr-2" style={{ fontSize: "18px", backgroundColor: `#${props.restaurant.user_rating.rating_color}` }}><i className="fas fa-star mr-2"></i>{props.restaurant.user_rating.aggregate_rating} <span style={{ fontSize: "14px" }}>/5</span></span></p>
                </div>
                <div className="d-flex flex-row justify-content-start">
                  <p className="card-text ml-1" style={{ fontSize: "14px", fontWeight: "400" }} ><i className="fas fa-map-pin mr-2"></i>{props.restaurant.location.locality_verbose} <i className="fas fa-utensils ml-3 mr-2"></i>{props.restaurant.establishment}</p>
                </div>
              </div>
            </div>
          ) : (
              <h5 className="text-center text-muted">Loading...</h5>
            )
        }
      </div>
    </div>
  )
}

export default RestaurantProfile
