import React from 'react';  
import { graphql } from 'gatsby';
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled';
import CarreraPreview from './carreraPreview'
import useCarrera from "../hooks/useCarrera"
import useEscuelaInfo from '../hooks/useEscuelaInfo';

const ListadoCarreras = styled.ul`
  max-width: 1500px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media(min-width:768px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }
`

const ContenedorPrincipal = styled.div`
    margin: 0 auto;
    width: 100%;

    .banner{
        margin-top: -10%;
        z-index: -1;
        align-items: center;
        align-content: center;
    }
`
const ContenedorSecundario =styled.div`
    width: 100%;
    margin-top: -20%;
    z-index: 2;
    background-color: #fff;
    height: auto;
    padding-top: 2.5%;
    align-items: center;
    div{
        width: 90%;
        margin-left: 5%;
    }
    h1{
        text-align: center;
        margin-top: 5rem;
        font-size:3rem;
    }
`

export const query = graphql`
query($slug: String!){
	allDatoCmsEscuela(filter: {slug: {eq : $slug}} ){
        nodes{
            titulo
            imagen{
                gatsbyImageData(layout: CONSTRAINED)
            }
            slug
            id
        }
    }
}
`


const ServiceTemplate = ({data: {allDatoCmsEscuela: {nodes}}}) => {
   
    const carreras = useCarrera()
    const servicioEscolar = useEscuelaInfo()
    
    const { imagen,  slug} = nodes[0]
    const ima = getImage(imagen)
    
    return ( 
        <Layout>
            <ContenedorPrincipal>
                <GatsbyImage image={ima} alt='imagenService' className='banner' />
                {console.log(slug)}
                {slug==='tramites-escolares' ?
                (
                    <ListadoCarreras>
                        {carreras.map(carrera=>(
                            <CarreraPreview 
                                key={carrera.id}
                                carrera={carrera}
                            />
                        ))}
                    </ListadoCarreras>
                )
                : (
                    <ContenedorSecundario>
                        {servicioEscolar.map(servicio=>(
                            <div
                                key={servicio.id}
                            >
                                <h1>{servicio.titulo}</h1>
                                <p>{servicio.descripcion}</p>
                            </div>
                        ))}
                    </ContenedorSecundario>
                    
                )}
               
            </ContenedorPrincipal>
        </Layout>

     );
}
 
export default ServiceTemplate;