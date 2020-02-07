import React from 'react'
import CityCard from './CityCard'

function SearchResult(props) {
  return (
    <div className="container">
      <div className="row mt-4 justify-content-center">
        {
          props.searchResultData == null ? (null) : (_renderResult(props.searchResultData))
        }
      </div>
    </div>
  )
}

const _renderResult = (cities) => {
  if (cities.length > 0) {
    return (
      cities.map(item =>
        <CityCard key={item.id} city_id={item.id} name={item.name} country_name={item.country_name} country_flag={item.country_flag_url} />
      )
    )
  } else {
    return (
      <div className="col-md text-center">
        <h5 className="text-danger" >Sorry, We Can't Find It</h5>
      </div>
    )
  }
}

export default SearchResult
