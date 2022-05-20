import React from 'react';
import {css} from '@emotion/react'
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Navegacion from './nav'

const EnlaceHome = styled(Link)`
    color:#000;
    text-align: center;
    text-decoration: none;
`

const Header = () => {
    return ( 
        <header
            css={css`
                background-image: radial-gradient(circle at 104.17% 4.55%, #ffffff 0, #ffffff 12.5%, #ffffff 25%, #f5ffff 37.5%, #e2ffff 50%, #cef6f9 62.5%, #bceef5 75%, #abe6f2 87.5%, #9bdff1 100%);
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 1500px;
                    margin: 0 auto;

                    @media(min-width: 768px){
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >   
                <EnlaceHome to='/'>
                    <h1>Escuela Libre de Homeopatía de México</h1>
                </EnlaceHome>
                
                
                <Navegacion></Navegacion>
            </div>
        </header>
     );
}
 
export default Header;