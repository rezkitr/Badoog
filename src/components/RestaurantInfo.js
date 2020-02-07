import React from 'react'

function RestaurantInfo(props) {
  return (
    <div className="row">
      <div className="col-md">
        {
          props.restaurant ? (
            <div className="card mb-3">
              <h3 className="card-header p-3">Overview</h3>
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-md">
                    <p className="h4 font-weight-bold">Telephone</p>
                    <h4 className="text-info" >{props.restaurant.phone_numbers}</h4>
                    <p className="h4 font-weight-bold mt-4">Cuisines</p>
                    <p className="h5">{props.restaurant.cuisines}</p>
                    <p className="h4 font-weight-bold mt-4">Average Cost</p>
                    <p className="h5">{props.restaurant.currency} {props.priceFormat(props.restaurant.average_cost_for_two)} <span className="text-muted">for two people</span> </p>
                  </div>
                  <div className="col-md">
                    <p className="h4 font-weight-bold">Opening Hours</p>
                    <p className="h5 text-warning">{props.restaurant.timings}</p>
                    <p className="h4 font-weight-bold mt-4">Address</p>
                    <p className="h5">{props.restaurant.location.address}</p>
                  </div>
                  <div className="col-md">
                    <p className="h4 font-weight-bold">More Info</p>
                    <ul className="h5" style={{ marginLeft: "-20px" }}>
                      {
                        props.restaurant.highlights.map(item => {
                          return (
                            <li>{item}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>) : (<h5 className="text-center text-muted">Loading...</h5>)
        }
      </div>
    </div>
  )
}

export default RestaurantInfo
