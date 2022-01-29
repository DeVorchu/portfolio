import React from 'react'
import  {LayoutWrapper } from '../../styles/globals/layout.styled'
import Header from '../../components/Header'
import Layout from '../../components/Footer'
import Content from '../../components/ContentHandler'

export default function index() {
    return (
        <LayoutWrapper>
            <Header />
            <Content/>
            <Layout />
        </LayoutWrapper>
    )
}

