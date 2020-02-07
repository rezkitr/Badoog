import React, { Component } from 'react'
import axios from 'axios'
import { API } from '../config/api'

import CityBanner from './CityBanner'
import CategoryList from './CategoryList'
import SearchKeyword from './SearchKeyword'
import SearchCriteria from './SearchCriteria'
import RestaurantCard from './RestaurantCard'

class CityContainer extends Component {

  state = {
    city: null,
    categories: null,
    selectedCategory: null,
    keyword: '',
    criteria: [],
    restaurants: []
  }

  componentDidMount() {
    this.getCityData(this.props.city_id)
    this.getCategoriesData()
    this.initiateRestaurantSearch(this.props.city_id)
  }

  getCityData = city_id => {
    let url = `${API.zomato.baseURL}/cities`
    axios.get(url, {
      headers: {
        'user-key': API.zomato.api_key
      },
      params: {
        city_ids: `${city_id}`
      }
    }).then(({ data }) => {
      if (data.status === 'success') {

        let city = data.location_suggestions[0]

        let criteriaTemp = {
          criteriaName: 'City',
          data: city
        }

        let criteria = [...this.state.criteria]
        criteria.push(criteriaTemp)

        this.setState({ city: city, criteria: criteria })
      }
    }).catch(err => console.log(err))
  }

  getCategoriesData = () => {
    let url = `${API.zomato.baseURL}/categories`
    axios.get(url, {
      headers: {
        'user-key': API.zomato.api_key
      }
    }).then(({ data }) => {
      let categories = this.transformCategoriesData(data.categories)
      this.setState({
        categories: categories
      })
    }).catch(err => console.log(err))
  }

  transformCategoriesData = categories => {
    let transformedCategories = categories.map(item => {
      return item.categories
    })
    return transformedCategories
  }

  handleSelectedCategory = (cat) => {
    let criteriaTemp = {
      criteriaName: 'Category',
      data: cat
    }
    let criteria = [...this.state.criteria]
    criteria = criteria.filter(cri => cri.criteriaName !== 'Category')
    criteria.push(criteriaTemp)
    this.setState({
      selectedCategory: cat,
      criteria: criteria
    })
  }

  handleKeywordChange = (event) => {
    const { value } = event.target
    this.setState({
      keyword: value
    })
  }

  initiateRestaurantSearch = (city_id) => {
    let url = `${API.zomato.baseURL}/search`
    axios.get(url, {
      headers: {
        'user-key': API.zomato.api_key
      },
      params: {
        entity_id: city_id,
        entity_type: 'city'
      }
    }).then(({ data }) => {
      this.setState({ restaurants: data.restaurants })
    }).catch(err => console.log(err))
  }

  handleSearch = () => {
    this.setState({ restaurant: null })
    let url = `${API.zomato.baseURL}/search`
    let params = {}

    for (let cri of this.state.criteria) {
      switch (cri.criteriaName) {
        case 'City':
          params.entity_id = cri.data.id
          params.entity_type = 'city'
          break
        case 'Category':
          params.category = cri.data.id
          break
        case 'Keyword':
          params.q = cri.data.name
          break
        default: break
      }

    }

    axios.get(url, {
      headers: {
        'user-key': API.zomato.api_key
      },
      params
    }).then(({ data }) => {
      this.setState({ restaurants: data.restaurants })
    }).catch(err => console.log(err))
  }

  addKeywordToCriteria = () => {
    let criteriaTemp = {
      criteriaName: 'Keyword',
      data: {
        name: this.state.keyword
      }
    }

    let criteria = [...this.state.criteria]
    criteria = criteria.filter(cri => cri.criteriaName !== 'Keyword')
    criteria.push(criteriaTemp)

    this.setState({ criteria: criteria, keyword: '' })
  }

  handleRemoveCriteria = index => {
    let criteria = [...this.state.criteria]
    criteria.splice(index, 1)
    this.setState({ criteria: criteria, selectedCategory: null })
  }

  priceFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  renderRestaurantList = () => {
    if (this.state.restaurants === null) {
      return (
        <div className="col-md text-center">
          <h5 className="text-muted" >Loading...</h5>
        </div>
      )
    }

    else if (this.state.restaurants.length > 0) {
      return (
        this.state.restaurants.map(({ restaurant }) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} priceFormat={(price) => this.priceFormat(price)} />
        ))
      )
    } else {
      return (
        <div className="col-md text-center">
          <h5 className="text-danger mt-5" >No Data Available</h5>
        </div>
      )
    }
  }

  render() {
    console.log(this.state.city)
    return (
      <>
        <CityBanner city={this.state.city} />
        <div className="container">
          <div className="row city-container">
            <div className="col-md-3 city-section">
              <CategoryList
                categories={this.state.categories}
                selectedCategory={this.state.selectedCategory}
                handleSelectedCategory={(cat) => this.handleSelectedCategory(cat)} />
            </div>

            <div className="col-md city-section">
              <SearchKeyword
                keyword={this.state.keyword}
                handleKeywordChange={this.handleKeywordChange}
                addKeywordToCriteria={this.addKeywordToCriteria}
              />
              <SearchCriteria
                criteria={this.state.criteria}
                handleRemoveCriteria={(index) => this.handleRemoveCriteria(index)}
                handleSearch={this.handleSearch}
              />
              <div className="row">
                {this.renderRestaurantList()}
              </div>
            </div>
          </div>
        </div>

      </>
    )
  }
}

export default CityContainer
