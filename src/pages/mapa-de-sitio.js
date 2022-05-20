import React from 'react';
import Layout from '../components/layout'
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import ImagenInicio from '../components/imagenInicio'

const Container = styled.div`
    height: auto;
    width: 100%;
    
    h1{
        font-size: 5rem;
        text-align: center;
    }
    li{
        font-size: 3rem;
    }
    .enjoy-css{
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        width: 300px;
        height: 50px;
        position: relative;
        cursor: pointer;
        border: none;
        -webkit-border-radius: 24px;
        border-radius: 24px;
        font: normal 30px/normal "Times New Roman", Times, serif;
        color: rgba(255,255,255,0.9);
        text-align: center;
        -o-text-overflow: clip;
        text-overflow: clip;
        background: #0199d9;
        -webkit-box-shadow: 6px 6px 2px 1px rgba(0,0,0,0.2) ;
        box-shadow: 6px 6px 2px 1px rgba(0,0,0,0.2) ;
        text-shadow: -1px -1px 0 rgba(15,73,168,0.66) ;
        -webkit-transition: all 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
        -moz-transition: all 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
        -o-transition: all 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
        transition: all 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
        -webkit-transform: rotateZ(-0.5729577951308232deg)   ;
        transform: rotateZ(-0.5729577951308232deg)   ;
    }
    .primer_nivel{
        margin: 0 0 10px 100px;
    }
    .segundo_nivel{
        margin: 0 0 10px 225px;
    }
    .tercer_nivel{
        margin: 0 0 10px 350px;
    }
    .cuarto_nivel{
        margin: 0 0 10px 475px;
    }
    .quinto_nivel{
        margin: 0 0 10px 600px;
    }
    @media(min-width:320px) and (max-width: 767px){
        height: auto;
        width: 100%;
        
        h1{
            font-size: 4rem;
            text-align: center;
        }
        li{
            font-size: 2rem;
        }
        .primer_nivel{
            margin: 0 0 10px 0px;
            width: 175px;
            height: 50px;
            font: normal 20px/normal "Times New Roman", Times, serif;
        }
        .segundo_nivel{
            margin: 0 0 10px 30px;
            width: 175px;
            height: 50px;
            font: normal 20px/normal "Times New Roman", Times, serif;
        }
        .tercer_nivel{
            margin: 0 0 10px 60px;
            width: 175px;
            height: 50px;
            font: normal 20px/normal "Times New Roman", Times, serif;
        }
        .cuarto_nivel{
            margin: 0 0 10px 90px;
            width: 175px;
            height: 50px;
            font: normal 20px/normal "Times New Roman", Times, serif;
        }
        .quinto_nivel{
            margin: 0 0 10px 120px;
            width: 175px;
            height: 50px;
            font: normal 20px/normal "Times New Roman", Times, serif;
        }
    }
    @media(min-width:768px) and (max-width: 1024px){
        height: auto;
        width: 100%;
        
        h1{
            font-size: 5rem;
            text-align: center;
        }
        li{
            font-size: 3rem;
        }
        .primer_nivel{
            margin: 0 0 10px 0px;
            width: 225px;
            height: 50px;
            font: normal 25px/normal "Times New Roman", Times, serif;
        }
        .segundo_nivel{
            margin: 0 0 10px 75px;
            width: 225px;
            height: 50px;
            font: normal 25px/normal "Times New Roman", Times, serif;
        }
        .tercer_nivel{
            margin: 0 0 10px 150px;
            width: 225px;
            height: 50px;
            font: normal 25px/normal "Times New Roman", Times, serif;
        }
        .cuarto_nivel{
            margin: 0 0 10px 225px;
            width: 225px;
            height: 50px;
            font: normal 25px/normal "Times New Roman", Times, serif;
        }
        .quinto_nivel{
            margin: 0 0 10px 300px;
            width: 225px;
            height: 50px;
            font: normal 20px/normal "Times New Roman", Times, serif;
        }
    }
    
`

const MapaDeSitio = () => {
    return ( 
        <Layout>
            <ImagenInicio />
            <Container>
                <h1>Mapa de Sitio</h1> 

                <div>
                    <Link to='/'><input type="button" className="enjoy-css primer_nivel" value="Inicio" /></Link>
                </div>
                    <div>
                        <Link to={'/servicios'}><input type="button" className="enjoy-css segundo_nivel" value="Servicios" /></Link>
                    </div>
                        <div>
                            <Link to={'/servicios/hospital'}><input type="button" className="enjoy-css tercer_nivel" value="Hospital" /></Link>
                        </div>
                        <div>
                            <Link to={'/servicios/escuela'}><input type="button" className="enjoy-css tercer_nivel" value="Escuela" /></Link>
                        </div>
                            <div>
                                <Link to={'/servicios/escuela/servicios-escolares'}><input type="button" className="enjoy-css cuarto_nivel" value="Servicios Escolares" /></Link>
                            </div>
                            <div>
                                <Link to={'/servicios/escuela/tramites-escolares'}><input type="button" className="enjoy-css cuarto_nivel" value="Tramites Escolares" /></Link>
                            </div>
                                <div>
                                    <Link to={'/servicios/escuela/tramites-escolares/medicina'}><input type="button" className="enjoy-css quinto_nivel" value="Medicina" /></Link>
                                </div>
                                <div>
                                    <Link to={'/servicios/escuela/tramites-escolares/enfermeria'}><input type="button" className="enjoy-css quinto_nivel" value="Enfermeria" /></Link>
                                </div>
                    <div>
                        <Link to={'/nosotros'}><input type="button" className="enjoy-css segundo_nivel" value="Nosotros" /></Link>
                    </div>
                    <div>
                        <Link to={'/contacto'}><input type="button" className="enjoy-css segundo_nivel" value="Contacto" /></Link>
                    </div>
                    <div>
                        <Link to={'/historia'}><input type="button" className="enjoy-css segundo_nivel" value="Historia" /></Link>
                    </div>
                    <div>
                        <Link to={'/organigrama'}><input type="button" className="enjoy-css segundo_nivel" value="Organigrama" /></Link>
                    </div>
                    <div>
                        <Link to={'/mapa-de-sitio'}><input type="button" className="enjoy-css segundo_nivel" value="Mapa de Sitio" /></Link>
                    </div>
                {/** 
                       
                    <ol className='list-group-flush '>
                        <li className='list-group-item '><Link to ='/'>Inicio</Link></li>
                            <ol className='list-group-flush'>
                                <li className='list-group-item '><Link to ={'/servicios'}>Servicios</Link></li> 
                                    <ol className='list-group-flush'>
                                        <li className='list-group-item '><Link to ={'/servicios/hospital'}>Hospital Dr. Higinio G. Peréz</Link></li>
                                        <li className='list-group-item '><Link to ={'/servicios/escuela'}>Escuela Libre de Homeopatía de México</Link></li>
                                            <ol className='list-group-flush'>
                                                <li className='list-group-item '><Link to ={'/servicios/escuela/servicios-escolares'}>Servicios Escolares</Link></li>
                                                <li className='list-group-item '><Link to ={'/servicios/escuela/tramites-escolares'}>Tramites Escolares</Link></li>
                                                    <ol className='list-group-flush'>
                                                        <li className='list-group-item '><Link to ={'/servicios/escuela/tramites-escolares/medicina'}>Medicina</Link></li>
                                                        <li className='list-group-item '><Link to ={'/servicios/escuela/tramites-escolares/enfermeria'}>Enfermeria</Link></li>
                                                    </ol>
                                            </ol>
                                    </ol>
                                <li className='list-group-item '><Link to ={'/nosotros'}>Nosotros</Link></li>
                                <li className='list-group-item '><Link to ={'/contacto'}>Contacto</Link></li>
                                <li className='list-group-item '><Link to ={'/historia'}>Historia</Link></li>
                                <li className='list-group-item '><Link to ={'/organigrama'}>Organigrama</Link></li>
                                <li className='list-group-item '><Link to ={'/mapa-de-sitio'}>Mapa de Sitio</Link></li>
                            </ol>
                        
                    </ol>*/}
            </Container>
        </Layout>
     );
}
 
export default MapaDeSitio;