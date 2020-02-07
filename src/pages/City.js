import React from 'react'

import CityContainer from '../components/CityContainer'

function City(props) {
  return (
    <div id="city-page" >
      <CityContainer city_id={props.match.params.city_id} />
    </div>
  )
}

export default City
