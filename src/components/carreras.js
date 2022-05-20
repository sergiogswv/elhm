import React from 'react';  
import { graphql } from 'gatsby';
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react';
import useCarreraInfo from '../hooks/useCarreraInfo';

export const query = graphql`
query($slug: String!){
	allDatoCmsCarrera(filter: {slug: {eq : $slug}} ){
        nodes{
            id
            titulo
            subtitulo
            contenido
            imagen{
                gatsbyImageData
            }
            requisitos{
                encabezado
                requisito
                id
            }
            imagenvertical{
                gatsbyImageData
            }
            encabezado{
                encabezado
            }
            descripcion{
                descripcion{
                    value
                }
            }
        }
    }
}
`


const CarreraTemplate = ({data: {allDatoCmsCarrera: {nodes}}}) => {

    const carreraInfo = useCarreraInfo()

    const {subtitulo, requisitos, imagenvertical, id} = nodes[0]
    const ima = getImage(imagenvertical)
    //console.log(carreraInfo[0])
    const {contenido} = carreraInfo[0]
    //const encabezados = nodes[0]
    //console.log(requisitos)
    console.log(carreraInfo)

    return ( 
        <Layout>
            <main
                key={id}
                css={css`
                    margin: 0 auto;
                    max-width: 1500px;
                    width: 95%;
                `}
            >{/** 
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 4rem;
                        font-size: 5rem;
                    `}
                >{titulo}</h1>*/}
                <h3
                    css={css`
                    text-align: center;
                    margin-top: 4rem;
                    font-size: 4rem;
                    margin-bottom: 2.5rem;
                `}
                >{subtitulo}</h3>
                <div
                    css={css`
                        display: flex;
                        justify-content: space-between;
                        h2{
                            font-size: 2.75rem;
                        }
                        p{
                            font-size: 2.25rem;
                        }
                        .imagenCarrera{
                            width: 60%;
                            margin: auto auto;
                        }
                        @media(max-width:768px){
                            display: block;
                            .imagenCarrera{
                                width: 100%;
                                margin: auto auto;
                            }
                            h2{
                                font-size: 1.65rem;
                            }
                            p{
                                font-size: 1.45rem;
                            }
                        }
                        @media(min-width:769px) and (max-width:1024px){
                            
                            h2{
                                font-size: 1.65rem;
                            }
                            p{
                                font-size: 1.45rem;
                            }
                        }
                    `}
                >
                    <GatsbyImage image={ima} alt='imagenCarrera' className='imagenCarrera'/>
                    <div
                        css={css`
                            margin-left: 1rem;
                            p{
                                text-align: left;
                            }
                            @media(max-width:768px){
                                width: 100%;
                                text-align: center;
                                margin-top: 2rem;
                                margin-left: 1rem;
                            }
                            @media(min-width:769px) and (max-width:1024px){
                                width: 50%;
                                text-align: right;
                                margin-top: 2rem;
                                margin-left: 1rem;
                            }
                        `}
                    >
                        
                        {// encabezada que indica el ingreso
                            requisitos.map(requisito =>{
                                return(
                                    <h1 css={css`text-align:center; margin-bottom:2rem;`}>{requisito.encabezado}</h1>
                                )
                            })
                        }
                    
                    {// requisitos
                    }
                    <h2 css={css`text-align:center; margin-bottom:2rem;`}>{nodes[0].encabezado[0].encabezado}</h2>
                    {
                        //console.log(nodes[0].descripcion[0].descripcion.value.document.children)
                        (nodes[0].descripcion[0].descripcion.value.document.children).map(requisito =>{
                            return(
                                <p>{requisito.children[0].value}</p>
                            )
                            
                        })
                    }
                    <br></br>
                    {
                        //aviso de las fechas y #documentos#
                    }
                    <h2 css={css`text-align:center; margin-bottom:2rem; background-color: #e1e1e1; border-radius:1rem;`}>{nodes[0].encabezado[1].encabezado}</h2>
                    {
                        //console.log(nodes[0])
                        (nodes[0].descripcion[1].descripcion.value.document.children).map(requisito =>{
                            return(
                                <p>{requisito.children[0].value}</p>
                            )
                            
                        })
                    }
                    </div>
                </div>
                {   // dividir perfil profesional del egresado para enfermeria y medicina aparte
                    contenido.map(content =>{
                        if(content.ocuparen === 'servicios_escolares' && content.carrera==='medicina'){
                            return(
                                <main
                                    key={content.id}
                                    css={css`
                                        width: 100%;
                                        padding: 0;
                                        margin: 20px 0 20px 0 ;
                                        align-items: center;
                                        text-align: justify;
                                        h1{
                                            text-align: center;
                                        }
                                    `}
                                >   
                                    
                                    <h1
                                        css={css`
                                            margin-bottom: 10px;
                                        `}
                                    >{content.titulo}</h1>
                                    <p
                                        css={css`
                                            line-height: 1.5;
                                        `}
                                    >{content.descripcion}</p>
                                </main>
                            )
                        }
                    })
                }
                
            </main>
        </Layout>

     );
}
 
export default CarreraTemplate;