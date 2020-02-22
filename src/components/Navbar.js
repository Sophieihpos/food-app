import React from "react"
import {Link} from "react-router-dom"

function Navbar(){
  return(
    <div className="nav-row">
      <Link to="/profiles">
        <div className="nav-button">
          <h2>Profiles</h2>
        </div>
      </Link>
      <Link to="/groups">
        <div className="nav-button">
          <h2>Groups</h2>
        </div>
      </Link>
      <Link to="/food">
        <div className="nav-button">
          <h2>Food</h2>
        </div>
      </Link>
    </div>
  )
}

export default Navbar
