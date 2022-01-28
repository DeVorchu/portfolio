import React from 'react'
import { NavItem } from '../../styles/conponents/navbar/_navItem'

export default function _navItem({linkText, link}) {
    return (
        <NavItem>
            {linkText}
        </NavItem>
    )
}
