import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { NavBarLinkProps } from './components'

import "./NavBar.css"

export default function NavBar() {
    const links = [
        { to: "/", title: "首页" },
        { to: "/list", title: "图片列表" },
        { to: "/random", title: "随机图片" },
    ]

    return (
        <div className="navbar">
            <Link to="/" className="navbar__logo">Picsum Demo</Link>
            <div className="navbar__links">
                {
                    links.map(link => <NavBarLink key={link.to} {...link} />)
                }
            </div>
        </div>
    )
}

const NavBarLink = (props: NavBarLinkProps) => (
    <NavLink 
        className="navbar__link"
        activeClassName="navbar__link--active"
        exact
        to={props.to}
    >{props.title}</NavLink>
)