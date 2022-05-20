import Layout from '../components/layout'
import {graphql, useStaticQuery} from 'gatsby'
import React from 'react';
import {css} from '@emotion/react'
import styled from '@emotion/styled'



const Contenido = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    text-align: center;
    height: calc(100vh - 56px - 56px - 52.5px);

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

const Organigrama = () => {
    const resultado = useStaticQuery(graphql`
    query{
        allDatoCmsDirectorio{
            nodes{
                titulod
                contenidod{
                    id
                puesto
                nombre
                }
            }
        }
    }
    `)
    const{titulod, contenidod} = resultado.allDatoCmsDirectorio.nodes[0]
    //console.log(resultado.allDatoCmsDirectorio.nodes[0])
    return ( 
            <Layout>
            <h1
                css={css`
                    font-size: 4.5rem;
                    text-align: center;
                `}
            >{titulod}</h1>
            <Contenido>
                {contenidod.map(contenido =>{
                    return(
                        <div key={contenido.key}>
                            <h2>{contenido.nombre}</h2>
                            <h3>{contenido.puesto}</h3>
                        </div>
                    )
                })}
                
            </Contenido>
        </Layout>
        
     );
}
 
export default Organigrama;