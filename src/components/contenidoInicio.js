import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import {css} from '@emotion/react'
import { Link } from 'gatsby';
import Carousel from './carousel'

const TextoInicio = styled.div`
    padding-top: 4rem;
    max-width: 1500px;
    width: 95%;
    margin: 0 auto;

    @media(min-width:768px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
    }
    p{
        line-height: 2;
    }
`
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

const ContenidoInicio = () => {

    const informacion = useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter: {slug: {eq: "inicio"}}){
            nodes{
                titulo
                subtitulo
                contenido
                imagen{
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
        }
    }
    `)
    //console.log(informacion.allDatoCmsServicio.nodes[0])

    // destructurin de la informacion de DatoCms
    const {titulo, contenido, imagen, subtitulo} = informacion.allDatoCmsPagina.nodes[0]
    const ima = getImage(imagen)
    const url = subtitulo.toLocaleLowerCase()
    return ( 
        <>
            
            <h2
                css={css`
                    text-align:center;
                    font-size: 4rem;
                    margin-top:4rem;
                `}
            >{titulo}</h2>

            
            <TextoInicio>
                <div>
                    <h2>{subtitulo}</h2>
                    <p>{contenido}</p>
                    <Boton to={url}>ver más</Boton>
                </div>
                
                <GatsbyImage image={ima} alt='imagenInicio' 
                />
            </TextoInicio>
            <div
                css={css`
                    margin: 5rem auto;
                    width: 50%;
                    @media(max-width:768px){
                        width:100%
                    }
                `}
            >
                <Carousel></Carousel>
            </div>
            
        </>
     );
}
 
export default ContenidoInicio;