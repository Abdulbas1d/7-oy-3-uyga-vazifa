import React from 'react'
import './MainLayout.css'
import { NavLink } from 'react-router-dom'

function MainLayout({ children }) {
    return (
        <div className='containerData'>
            <div className="datas">
                <h2>LOGO</h2>
                <div className="link">
                    <NavLink className="data" to="/">Homework One</NavLink>
                    <NavLink className="data" to="/homeworkTwo">Homework Two</NavLink>
                    <NavLink className="data" to="/homeworkThree">Homework Three</NavLink>
                </div>
            </div>

            {children}
        </div>
    )
}

export default MainLayout
