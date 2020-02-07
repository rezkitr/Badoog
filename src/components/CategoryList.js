import React from 'react'

function CategoryList(props) {
  return (
    props.categories ? (
      <>
        <h5 className="mb-3">Categories</h5>
        <div className="list-group">
          {
            props.categories.map(item => {
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`list-group-item list-group-item-action h5 ${props.selectedCategory && props.selectedCategory.id === item.id ? "active" : ""} `}
                  onClick={() => props.handleSelectedCategory(item)}>
                  {item.name}
                </button>
              )
            })
          }
        </div>
      </>
    ) : (
        <h5 className="text-muted" >Loading...</h5>

      )
  )
}

export default CategoryList
