import React from 'react'
import { ContentWrapper, PageWrapper } from '../../styles/conponents/content'
import Banner from '../Banner'

export default function index() {
    return (
        <ContentWrapper>
            <PageWrapper>
                <Banner />
            </PageWrapper>
        </ContentWrapper>
    )
}
