import styled from 'styled-components'
import bg from '../../../assets/vPhoto3.png'

export const BannerWrapper = styled.div`      
    width: 100vw;
    min-height: 55vh;
    font-family: 'VT323', monospace;
    background: url(${bg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: 400px;
    display: flex;  
    justify-content: center;
    align-items: center;
`

export const BannerText = styled.div`        
    width: 55vw;
    min-height: 40vh;
    font-size: 35px;
    span{
        color: ${({theme}) => theme._colorFont };
    }
`

export const BannerTextLower = styled.div` 
       font-size: 22px;
       padding-top: 30px;
       margin-left: -30px;     
`
