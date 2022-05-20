import React from 'react';
import useCarousel from '../hooks/useCarousel';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Titulo = styled.h3`
    font-weight: 700;
    font-size: 5rem;
    color: #fff;
    text-transform: uppercase;
    -webkit-text-stroke: 2px black;
    @media(min-width:769px) and (max-width:1024px){
        font-size: 2.75rem;
    }
    @media(max-width:768px){
        font-size: 2.5rem;
    }
`
const Parrafo = styled.p`
    font-size: 2.5rem;
    @media(min-width:769px) and (max-width:1024px){
        font-size: 1.5rem;
    }
`
const Boton = styled.button`
    font-size: 1.5rem;
    background-color: #E2FFFF;
    border: none;
    border-radius: 20px;
    margin-bottom: 1rem;
    @media(min-width:769px) and (max-width:1024px){
        font-size: .75rem;
    }
    @media(max-width:768px){
        font-size: 1rem;
    }
`

const Carousel = () => {

    const imagenes = useCarousel()
    
    let imagenesTemp = []
    let tituloTemp=[]
    let parrafoTemp=[]
    imagenes.map(imagen=>{
        imagenesTemp.push(imagen.imagen.fluid.srcSet)
        tituloTemp.push(imagen.titulo)
        parrafoTemp.push(imagen.parrafo)
    })
    //console.log(imagenesTemp)
    return ( 
        <>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    {/*<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>*/}
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src={imagenesTemp[0]} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption">
                            <Titulo>{tituloTemp[0]}</Titulo>
                            <Parrafo className='d-none d-md-block'>{parrafoTemp[0]}</Parrafo>
                            <Link to='/servicios/escuela/tramites-escolares/medicina'><Boton type="button" className="btn btn-info">Medicina</Boton></Link>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={imagenesTemp[1]} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption ">
                            <Titulo>{tituloTemp[1]}</Titulo>
                            <Parrafo className='d-none d-md-block'>{parrafoTemp[1]}</Parrafo>
                            <Link to='/servicios/escuela/tramites-escolares/enfermeria'><Boton type="button" className="btn btn-info">Enfermeria</Boton></Link>
                        </div>
                        
                    </div>
                    {/** 
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={imagenesTemp[2]} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <Titulo>{tituloTemp[2]}</Titulo>
                            <Parrafo className='d-none d-md-block'>{parrafoTemp[2]}</Parrafo>
                            <Link to='/enfermeria'><Boton type="button" className="btn btn-info">Escuela</Boton></Link>
                        </div>
                    </div>*/}
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={imagenesTemp[3]} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <Titulo>{tituloTemp[3]}</Titulo>
                            <Parrafo className='d-none d-md-block'>{parrafoTemp[3]}</Parrafo>
                            <Link to='/servicios'><Boton type="button" className="btn btn-info">Servicios</Boton></Link>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={imagenesTemp[4]} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <Titulo>{tituloTemp[4]}</Titulo>
                            <Parrafo className='d-none d-md-block'>{parrafoTemp[4]}</Parrafo>
                            <Link to='/contacto'><Boton type="button" className="btn btn-info">Contacto</Boton></Link>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={imagenesTemp[5]} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <Titulo>{tituloTemp[5]}</Titulo>
                            <Parrafo className='d-none d-md-block'>{parrafoTemp[5]}</Parrafo>
                            <Link to='/mapa-de-sitio'><Boton type="button" className="btn btn-info">Mapa de Sitio</Boton></Link>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
     );
}
 
export default Carousel;