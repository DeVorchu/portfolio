import styled from 'styled-components'



export const NavWrapper = styled.div`      
    width: 65vw;
    height: 5vh;
    display: flex;
`

export const NavLogo = styled.div`      
    width: 15vw;
    height: 5vh;
    font-size: 50px;
    span{
        color: ${({theme}) => theme._colorFont }
    }
`

export const NavItems = styled.div`      
    width: 50vw;
    height: 5vh;
    display: flex;
`