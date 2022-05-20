import React from 'react';
import Layout from '../components/layout'
import {graphql, useStaticQuery} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {css} from '@emotion/react'
import styled from '@emotion/styled'

const Contenido = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    text-align: justify;
    line-height: 1.25;

    @media(min-width: 768px){
        display: grid;
        grid-template-columns: repeat(2 1fr);
        column-gap: 3rem;
    }
    p{
        margin-top: 1rem;
    }
    h1{
        text-align:center;
    }
`

const AvisoDePrivacidad = () => {

    const resultado = useStaticQuery(graphql`
    query{
        allDatoCmsAvisodeprivacidad{
				nodes{
					aviso{
					    value
                }
            }
        }
    }
    `)

    const aviso = resultado.allDatoCmsAvisodeprivacidad.nodes[0].aviso.value.document.children
    return ( 
        <>
            <Layout>
                <h1 css={css`text-align:center; font-size:700; font-weight:bold;margin-top:2rem;font-size:4rem;`}>Aviso de Privacidad</h1>
                <Contenido>
                    {
                        aviso.map(av =>{
                            if(av.type === 'heading'){
                                return(
                                    <h1>{av.children[0].value}</h1>
                                )
                                
                            }
                            else{
                                return(
                                    <p>{av.children[0].value}</p>
                                )
                                
                            }
                        })
                    }
                </Contenido>
                
                
            </Layout>
        </>
     );
}
 
export default AvisoDePrivacidad;