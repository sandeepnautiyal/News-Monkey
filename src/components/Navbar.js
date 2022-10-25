import React from 'react'
import { Link } from 'react-router-dom'
// Link
function Navbar() {
  
  return (
    <>
    <nav className="navbar bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand " to="#">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaXTSmAii2XB6qt7LQblFOi49zSqxP0HDFCA&usqp=CAU" alt="Logo" width="30" height="24" className=" align-text-top"/>
      News Monkey
    </Link>
    <ul className="nav">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/business'>Business</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/entertainment">Entertainment</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/general">General</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/health">Health</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/Science">Science</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/sports">Sports</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/technology">Technology</Link>
  </li>
</ul>
  </div>
</nav>
    </>
  )
}

export default Navbar