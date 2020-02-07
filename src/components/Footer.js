import React from 'react'

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container-fluid footer">
        <div className="row text-center mt-5">
          <div className="col-md my-5">
            <a href="#" className="mx-4" ><i className="fab fa-facebook-f text-white fa-4x"></i></a>
            <a href="#" className="mx-4"><i className="fab fa-twitter text-white fa-4x"></i></a>
            <a href="#" className="mx-4"><i className="fab fa-instagram text-white fa-4x"></i></a>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md mb-3">
          <h5 className="text-white-50">BADOOG <i className="far fa-copyright"></i> 2020</h5>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer
