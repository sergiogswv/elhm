import React from 'react';
import {css} from '@emotion/react'
import Navegacion from './nav'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

const EnlaceHome = styled(Link)`
    color: #000;
    text-align: center;
    text-decoration:none;
`
const EnlaceMapa = styled(Link)`
    color: #fff;
    text-align: center;
    text-decoration:none;
`

const Footer = ({title}) => {

    const year=new Date().getFullYear()
    return ( 
        <>
            <footer
                css={css`
                    background-image: radial-gradient(circle at 13.92% 43.64%, #ffffff 0, #ffffff 8.33%, #ffffff 16.67%, #ffffff 25%, #ffffff 33.33%, #f7ffff 41.67%, #e2ffff 50%, #cdf6f9 58.33%, #b9edf5 66.67%, #a7e5f2 75%, #97ddf1 83.33%, #8ad5f0 91.67%, #7fcef0 100%);
                    margin-top: 5rem;
                    padding:1rem;
                    
                `}
            >
                <div
                    css={css`
                        max-width: 1200px;
                        margin: 0 auto;

                        @media(min-width:768px){
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }
                    `}
                >
                    <Navegacion/>
                    <EnlaceHome
                        to='/'
                    >
                        <h1>
                            ELMH I.A.P.
                        </h1>
                    </EnlaceHome>
                    
                    
                </div>
            </footer>
            <div
                css={css`
                    text-align:center;
                    color:#fff;
                    background-color: rgb(33,44,55);
                    margin:0;
                    padding: 1rem;
                    display: block;
                    line-height: .75;
                    p{
                        @media(min-width:320px) and (max-width:767px){
                            margin-bottom: 1.5rem;
                            font-size: 1.2rem;
                            line-height: 1.5;
                        }
                        @media(min-width:768px) and (max-width:1024px){
                            margin-bottom: 1.5rem;
                            font-size: 1.2rem;
                            line-height: 1.5;
                        }
                    }
                    
                `}
            >   
                <p>Ley General de Salud Reglamento  de la Ley General de Salud en materia de prestación de servicios de atención médica NOM-004-SSA3-2012 del expediente clínico</p>
                <p>Copyright © 1912 - {year}. Todos los Derechos Reservados para la {title} </p>
                <p>Reconocida Oficialmente por Derecho Presidencial de fecha 18 de Enero de 1930 Amparo 161/939 con ejecutoria de fecha 17 de Junio de 1940</p>
                <p
                    css={css`color:#e1e1e1;`}
                >PERAVILLO No. 75 COL. MORELOS, DELEG. CUAUHTEMOC MÉXICO, CD. DE MÉXICO, C.P. 06200 Tels: 55 5529 0913 /55  5526 0949 / 55 5529 4475 / 55 5529 6191 / 55 5772 3548</p>
                <div
                    css={css`
                            display: flex; 
                            justify-content: inherit; 
                            width:50%; 
                            padding-left: 40%;
                            p{
                                padding-left: 10%;
                                width: 150px;
                            }
                            @media(min-width:320px) and (max-width:767px){
                                margin: 0;
                                padding: 0;
                                text-align: center;
                                align-items: center;
                            }
                            @media(min-width:768px) and (max-width:1024px){
                                display: -webkit-box;
                                //justify-content: space-between;
                            }
                    `}
                >
                    <EnlaceMapa to={'/mapa-de-sitio'}><p>Mapa de Sitio</p></EnlaceMapa>
                    <EnlaceMapa to={'/aviso-de-privacidad'}><p>Aviso de privacidad</p></EnlaceMapa>
                </div>
                
            </div>

        </>
     );
}
 
export default Footer;