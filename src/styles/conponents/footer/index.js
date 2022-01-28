import styled from 'styled-components'

export const FooterWrapper = styled.div`      
    width: 100vw;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({theme}) => theme._lightBox };
    color: ${({theme}) => theme._lightBoxText };
    text-transform: uppercase;
    font-size: 22px;
`