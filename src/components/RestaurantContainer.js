import React, { Component } from 'react'
import axios from 'axios'
import { API } from '../config/api'

import RestaurantProfile from './RestaurantProfile'
import RestaurantInfo from './RestaurantInfo'

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

        <div className="row">
          <div className="col-md">
            <div className="card">
              <h3 className="card-header p-3">Reviews</h3>
              <div className="card-body px-5">
                <section className="text-center dark-grey-text">
                  <div className="wrapper-carousel-fix">
                    <div id="reviews" className="carousel no-flex review-carousel slide carousel-fade" data-ride="carousel" data-interval="false">
                      <div className="carousel-inner" role="listbox">
                        {
                          this.state.reviews ? (
                            this.state.reviews.map((item, index) => {
                              return (
                                <div key={item.review.id} className={`carousel-item ${index <= 0 ? "active" : ""}`}>
                                  <div className="review">
                                    <div className="d-flex flex-row justify-content-between align-items-center px-5" >
                                      <a className="carousel-control" href="#reviews" role="button" data-slide="prev">
                                        <i className="fas fa-chevron-left text-black-50"></i>
                                      </a>
                                      <div className="avatar mx-auto mb-4">
                                        <img src={item.review.user.profile_image} width="160px" className="rounded-circle img-fluid" alt="userprofile" />
                                      </div>
                                      <a className="carousel-control" href="#reviews" role="button" data-slide="next">
                                        <i className="fas fa-chevron-right text-black-50"></i>
                                      </a>
                                    </div>
                                    <p className="h5"><i className="fas fa-quote-left mr-2"></i>{item.review.review_text}</p>
                                    <h3 className="font-weight-bold mt-3">{item.review.user.name}</h3>
                                    <h6 className="font-weight-bold mt-2 mb-4" style={{ color: `#${item.review.user.foodie_color}` }} >{item.review.user.foodie_level}</h6>
                                    <h5><span className="badge text-white p-2" style={{ backgroundColor: `#${item.review.rating_color}` }} ><i className="fas fa-star mr-2"></i>{item.review.rating}</span></h5>
                                    <p className="mt-3" >{item.review.review_time_friendly}</p>
                                  </div>
                                </div>
                              )
                            })
                          ) : (<h5 className="text-center text-muted">Loading...</h5>)
                        }
               
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RestaurantContainer
