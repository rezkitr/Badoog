import React, { Component } from 'react'
import axios from 'axios'
import {API} from '../config/api'

import CityCard from './CityCard'

class FeaturedCity extends Component {

  state = {
    cityData: null
  }

  componentDidMount() {
    this.getFeaturedCities()
  }

  getFeaturedCities = () => {
    var url = `${API.zomato.baseURL}/cities`
    axios.get(url, {
      headers : {
        'user-key' : API.zomato.api_key
      },
      params: {
        city_ids : "74,11052,170"
      }
    }).then(({data})=>{
      if(data.status === "success") {
        this.setState({
          cityData : data.location_suggestions
        })
      }
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
        <div className="row text-center justify-content-center mt-5">
          <div className="col-md">
            <h1>Featured Cities</h1>
            <hr style={{ border: "0.5px solid grey", width: "10%" }} />
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          {
            this.state.cityData == null ? (
              <div className="col-md text-center">
                <h5 className="text-muted" >Loading...</h5>
              </div>
            ) : 
            (
                this.state.cityData.map(item => {
                  return (
                    <CityCard key={item.id} city_id={item.id} name={item.name} country_name={item.country_name} country_flag={item.country_flag_url} />
                  )
                })
              )
          }
        </div>
      </div>
    )
  }
}

export default FeaturedCity
