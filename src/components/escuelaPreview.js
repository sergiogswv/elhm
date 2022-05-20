import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {css} from '@emotion/react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color:#E2FFFF;
    width: 100%;
    color: #000;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    font-size: 2rem;
`

const EscuelaPreview = ({carrera, bandera}) => {

    const { imagen, titulo, slug} = carrera

    const ima = getImage(imagen)
    //const urlFinal = 'servicios/escuela/tramites-escolares/'+slug
    return ( 
        <div
            css={css`
                border: 1px solid #e1e1e1;
                margin-bottom: 2rem;
            `}
        > 
        <GatsbyImage image={ima} alt='imagenCarrera' />
            <div
                css={css`
                    padding: 3rem;
                `}
            >
                <h2
                    css={css`
                        text-align:center;
                        font-weight: bold;
                        font-size: 3rem;
                    `}
                >{titulo}</h2>
                {/*
                    bandera === 1
                    ? (<Boton to={urlFinal}>ver más</Boton>)
                    : <Boton to={slug}>ver más</Boton>*/
                }
                <Boton to={slug}>ver más</Boton>
            
            </div>
                
        </div>

     );
}
 
export default EscuelaPreview;