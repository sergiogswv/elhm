import React from 'react';
import Layout from '../components/layout'
import {graphql, useStaticQuery} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {css} from '@emotion/react'
import styled from '@emotion/styled'
import Email from '../components/email';

const Contenido = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    text-align: center;

    @media(min-width: 768px){
        display: grid;
        grid-template-columns: repeat(2 1fr);
        column-gap: 3rem;
    }
    p{
        line-height: 2;
        margin-top: 2rem;
    }
    .banner{
        margin-top: -10%;
        z-index: -1;
        align-items: center;
        align-content: center;
    }
`

const Contacto = () => {

    const resultado = useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter: {slug: {eq: "contacto"}}){
                nodes{
                    titulo
                    subtitulo
                    contenido
                    imagen{
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
        }
        allDatoCmsDirectorio{
            nodes{
                titulod
                subtitulod
                telefonos
                contenidod{
                    nombre
                    puesto
                    email
                    id
                }
            }
        }
    }
    `)

    const {titulo, contenido, imagen} = resultado.allDatoCmsPagina.nodes[0] 
    const ima = getImage(imagen)

    const {telefonos} = resultado.allDatoCmsDirectorio.nodes[0]
    //console.log(telefonos)
    return ( 
        <>
            <Layout>
                <h2
                    css={css`
                        margin-top:4rem;
                        text-align:center;
                        font-size: 4rem;;
                    `}
                >{titulo}</h2>
                <Contenido>
                    <p>{contenido}</p>

                    <GatsbyImage image={ima} alt='imagenInicio' 
                    />
                </Contenido>
                
                <div
                    css={css`
                        display: flex;
                        justify-content: space-between;
                    `}
                >   
                    
                    <Email
                        correo={telefonos}
                    ></Email>
                    
                </div>
                
            </Layout>
        </>
     );
}
 
export default Contacto;