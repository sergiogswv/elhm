import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled'

const ImageBackground = styled(BackgroundImage)`
    height: 700px;
`
const TextoImagen = styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63,.75),rgba(34,49,63,.75));
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 4rem;
        margin: 0%;

        @media(min-widht:992px){
            font-size: 5.8rem;
        }
        @media(max-width:767px){
            text-align:center;
        }
    }
    p{
        font-size: 2rem;
        @media(min-widht:992px){
            font-size: 3.2rem;
        }
        @media(max-width:767px){
            font-size: 2.2rem;
        }
    }
`

const ImagenInicio = () => {

    const {image} = useStaticQuery(graphql`
        query{
            image: file(relativePath: {eq : "1.jpg"}){
                sharp: childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    return ( 
        
        <ImageBackground tag='section' fluid={image.sharp.fluid} fadeIn='soft'>
            <TextoImagen>
                <h1>Escuela Libre de Homeopatía de México</h1>
                <p>I.A.P.</p>
            </TextoImagen>

        </ImageBackground>
     );
}
 
export default ImagenInicio;