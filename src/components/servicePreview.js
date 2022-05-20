import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {css} from '@emotion/react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80,.85);
    width: 100%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`

const servicePreview = ({service}) => {
    
    const {imagen, titulo, slug} = service
   //console.log(service)
    const ima = getImage(imagen)


    return ( 
        <div
            css={css`
                border: 1px solid #e1e1e1;
                margin-bottom: 2rem;
                height: 100%;
            `}
        >   
            <GatsbyImage image={ima} alt='imagenCarrera' />
            <div
                css={css`
                    padding: 3rem;
                    h2{
                        text-align:center;
                    }
                `}
            >
                <h2>{titulo}</h2>

                <Boton to={slug}>ver más</Boton>
            </div>
        </div>

     );
}
 
export default servicePreview;