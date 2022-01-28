import { createGlobalStyle } from 'styled-components'
import * as colors from './colors.js'

export const AppStyleWrapper = createGlobalStyle`  
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');  

    body {    
        
        background: ${colors.mainBG};
        color: ${colors.textColor};
        margin: 0;
        font-family: 'Russo One', sans-serif;
        font-size: 14px;
        
        a{
            color: white;
            text-decoration: none;
        }
    }

    
`