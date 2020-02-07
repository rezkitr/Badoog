import React from 'react'

function SearchKeyword(props) {
  return (
    <>
      <h5 className="mb-3">Keyword</h5>
      <div className="form-row align-items-center">
        <div className="col-md-10">
          <input
            className="form-control"
            type="text"
            placeholder="Type keyword i.e : restaurant's name, location, cuisine, etc."
            value={props.keyword}
            onChange={props.handleKeywordChange}
          />
        </div>
        <div className="col-md">
          <button
            onClick={props.addKeywordToCriteria}
            className="btn btn-sm btn-primary"
            type="button"
          ><i className="fas fa-plus fa-2x"></i></button>
        </div>
      </div>
    </>
  )
}

export default SearchKeyword
