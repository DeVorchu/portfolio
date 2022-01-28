import React from 'react'
import { Link } from 'react-router-dom'
import { NavItem } from '../../styles/conponents/navbar/_navItem'

export default function _navItem({linkText, linkTo}) {
    return (
        <NavItem>
            <Link to={linkTo}>{linkText}</Link>
        </NavItem>
    )
}
