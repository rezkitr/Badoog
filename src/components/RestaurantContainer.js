import React, { Component } from 'react'
import axios from 'axios'
import { API } from '../config/api'

import RestaurantProfile from './RestaurantProfile'
import RestaurantInfo from './RestaurantInfo'
import RestaurantReview from './RestaurantReview'

class RestaurantContainer extends Component {

  state = {
    restaurant: null,
    reviews: null
  }

  componentDidMount() {
    this.getRestaurantData(this.props.res_id)
    this.getReviewData(this.props.res_id)
  }

  getRestaurantData = (res_id) => {
    let url = `${API.zomato.baseURL}/restaurant`
    axios.get(url, {
      headers: {
        'user-key': API.zomato.api_key
      },
      params: {
        res_id: res_id
      }
    }).then(({ data }) => {
      this.setState({ restaurant: data })
    }).catch(err => console.log(err))
  }

  getReviewData = (res_id) => {
    let url = `${API.zomato.baseURL}/reviews`
    axios.get(url, {
      headers: {
        'user-key': API.zomato.api_key
      },
      params: {
        res_id: res_id
      }
    }).then(({ data }) => {
      this.setState({ reviews: data.user_reviews })
    }).catch(err => console.log(err))
  }

  priceFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  render() {
    return (
      <div className="container" >
        <RestaurantProfile restaurant={this.state.restaurant} />
        <RestaurantInfo restaurant={this.state.restaurant} priceFormat={this.priceFormat} />
        <RestaurantReview reviews={this.state.reviews}  />
      </div>
    )
  }
}

export default RestaurantContainer
