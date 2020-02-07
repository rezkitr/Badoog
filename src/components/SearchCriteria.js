import React from 'react'


function SearchCriteria(props) {

  const criteriaList = props.criteria.map((item, index) => {
    if (item.criteriaName !== 'City') {
      return (
        <tr key={index} >
          <td width="40%">{item.criteriaName}</td>
          <th width="50%" scope="row" >{item.data.name}</th>
          <td width="10%" ><i className="fas fa-times text-danger fa-lg" onClick={() => props.handleRemoveCriteria(index)} style={{ cursor: "pointer" }} ></i></td>
        </tr>
      )
    }
  })

  return (
    <div className="card mt-3">
      <div className="card-body">
        <p className="card-title h5">Find restaurants based on criteria:</p>
        <table className="table table-sm table-hover">
          <tbody>
            {
              props.criteria.length <= 1 ? (
                <p className="text-info" >Please select from Category or type a keyword first</p>
              ) : criteriaList
            }
          </tbody>
        </table>
        {
          props.criteria.length <= 0 ? null : (
            <div className="text-right">
              <button type="button" className="btn btn-sm btn-primary" onClick={props.handleSearch} ><i className="fas fa-search fa-2x"></i></button>
            </div>)
        }
      </div>
    </div>
  )
}

export default SearchCriteria
