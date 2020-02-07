import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function Navbar(props) {

  return (
    <div>
      {
        props.location.pathname === '/' ? (
          <nav className="navbar navbar-light">
            <div className="container-fluid ">
              <Link to="/" className="navbar-brand" style={{ margin: "auto" }}>Badoog</Link>
            </div>
          </nav>) : (
            <nav className="navbar navbar-dark bg-dark">
              <div className="container-fluid ">
                <Link to="/" className="navbar-brand" style={{ margin: "auto" }}>Badoog</Link>
              </div>
            </nav>
          )
      }
    </div>
  )
}

export default withRouter(Navbar)
