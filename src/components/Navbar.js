import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.navItem1}</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">{props.navItem2}</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">{props.navItem3}</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
    </>
  )
}
//Declaring Property's Types
Navbar.propTypes = {title: PropTypes.string.isRequired,
                    navItem1: PropTypes.string,
                    navItem2: PropTypes.string,
                    navItem3: PropTypes.string,
                }
//Declaring Default Values for Props
Navbar.defaultProps = {title: 'Set Title Here',
                       navItem1: 'Set first navbar menu',
                       navItem2: 'Set second navbar menu',
                       navItem3: 'Set third navbar menu'}