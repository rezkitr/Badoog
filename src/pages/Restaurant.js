import React from 'react'

import RestaurantContainer from '../components/RestaurantContainer'

function Restaurant(props) {
  return (
    <div>
      <RestaurantContainer res_id = {props.match.params.restaurant_id} />
    </div>
  )
}

export default Restaurant
