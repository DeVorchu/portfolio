import React from 'react'
import { BannerText, BannerWrapper, BannerTextLower } from '../../styles/conponents/banner_box'

export default function index() {
    return (
        <BannerWrapper>
            <BannerText>
                SELECT <span>*</span><br/>
                FROM <span>Projects</span> <br/>
                WHERE <span>"Code"</span><br/>
                LIKE <span>"%NoBugs%"</span>
                <BannerTextLower>
                    /&#62; no results!
                </BannerTextLower>
            </BannerText>
            
        </BannerWrapper>
    )
}
