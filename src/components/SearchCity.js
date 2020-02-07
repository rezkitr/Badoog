import React, { Component } from 'react'
import axios from 'axios'
import { API } from '../config/api'
import { Element } from 'react-scroll'

import SearchResult from '../components/SearchResult'

class SearchCity extends Component {

  state = {
    keyword: "",
    searchResultData: null
  }

  handleKeywordChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSearch = () => {
    let keyword = this.state.keyword
    var url = `${API.zomato.baseURL}/cities`
    axios.get(url, {
      headers: {
        'user-key': API.zomato.api_key
      },
      params: {
        q: keyword
      }
    }).then(({ data }) => {
      if (data.status === 'success') {
        this.setState({ searchResultData: data.location_suggestions, keyword: '' })
      }
    }).catch(err => console.log(err))

  }

  render() {
    return (
      <>
        <Element id="search-section" name="search-section" >
          <div className="container mb-5">
            <div className="row text-center justify-content-center mt-5">
              <div className="col-md">
                <h1>SEARCH</h1>
                <hr style={{ border: "0.5px solid grey", width: "10%" }} />
              </div>
            </div>
            <div className="row justify-content-center align-items-center mt-4">
              <div className="col-md-12 col-lg-8 text-center">
                <input
                  type="text"
                  value={this.state.keyword}
                  name="keyword"
                  className="form-control"
                  placeholder="Type city name"
                  onChange={this.handleKeywordChange} />
              </div>
              <div className="col-md-3 col-lg-2 search-btn">
                <button className="btn btn-primary" onClick={this.handleSearch} >SEARCH <i className="fas fa-search fa ml-2"></i></button>
              </div>
            </div>
          </div>
        </Element>
        <>
          <SearchResult searchResultData={this.state.searchResultData} />
        </>
      </>
    )
  }
}

export default SearchCity
