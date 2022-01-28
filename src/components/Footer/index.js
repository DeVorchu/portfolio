import React from 'react'
import { FooterWrapper } from '../../styles/conponents/footer'

export default function index() {
    return (
        <FooterWrapper>
            VORCZU &copy; {new Date().getFullYear()}
        </FooterWrapper>
    )
}
