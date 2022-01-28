import React from 'react'
import { LayoutWrapper } from '../../styles/globals/layout.styled'
import Header from '../../components/Header'
import Layout from '../../components/Footer'

export default function index() {
    return (
        <LayoutWrapper>
            <Header />
            <Layout />
        </LayoutWrapper>
    )
}

