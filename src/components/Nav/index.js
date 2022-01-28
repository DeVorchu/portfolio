import React, { useContext } from 'react'
import { NavItems, NavLogo, NavWrapper } from '../../styles/conponents/navbar'
import { LangContext } from '../../Context/langContext'
import NavItem from './_navItem.js'

export default function Index() {
    const lang = useContext(LangContext)
    return (
        <NavWrapper>
            <NavLogo>
                <span>V</span>code
            </NavLogo>
            <NavItems>
               {lang.navLinks.map(el=> <NavItem {...el} />)}
            </NavItems>
        </NavWrapper>
    )
}
