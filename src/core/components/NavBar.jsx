import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
                <div className="container">

                    <a className="navbar-brand">Ściernisko</a>

                    <button className="navbar-toggler" type="button" onClick={() => setCollapsed(prev => !prev)}
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={"collapse navbar-collapse " + (collapsed ? '' : 'show')}>
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/mainPage" activeClassName="active">Main Page</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users" activeClassName="active">Users</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/search">Tasks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/kanban">Kanban</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
