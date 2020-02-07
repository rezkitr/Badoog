import React from 'react'

function RestaurantReview(props) {
  return (
    <div className="row">
      <div className="col-md">
        {
          props.reviews ? (
            <div className="card">
              <h3 className="card-header p-3">Reviews</h3>
              <div className="card-body px-5">
                <section className="text-center dark-grey-text">
                  <div className="wrapper-carousel-fix">
                    <div id="reviews" className="carousel no-flex review-carousel slide carousel-fade" data-ride="carousel" data-interval="false">
                      <div className="carousel-inner" role="listbox">
                        {

                          props.reviews.map((item, index) => {
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
                        }
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          ) : (<h5 className="text-center text-muted">Loading...</h5>)
        }
      </div>
    </div>
  )
}

export default RestaurantReview
