import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {css} from '@emotion/react'

const historiaPreview = ({historia}) => {

    const {parrafo, imagen, segundo, tercero, encabezado, linea, slug} = historia
    //console.log(historia)
    const ima = getImage(imagen)

    return ( 
        <>
            <div
                css={css`
                    max-width: 1500px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 20% 80%;
                    .imagen{
                        margin: auto auto;
                    }
                    
                `}
            >   
                <GatsbyImage image={ima} alt='imagenHistoria' className='imagen'/>
                {
                    slug==='lista'
                    ?   <>
                            <div></div>
                            <ul
                                css={css`
                                    text-align:center;

                                    li{
                                        font-size: 3rem;
                                        font-weight: 700;
                                    }
                                    @media(max-width:768px){
                                        li{
                                            font-size: 2rem;
                                            font-weight: 700;
                                        }
                                    }
                                `}
                            >
                                <li>--{parrafo}--</li>
                                <li>--{segundo}--</li>
                                <li>--{tercero}--</li>
                            </ul>
                        </>
                    :
                    <div
                        css={css`
                            padding-left: 1rem;
                            p{
                                line-height: 1.5;
                                font-size: 2rem;
                            }
                            @media(max-width:768px){
                                p{
                                    line-height: 1;
                                    font-size: 1.5rem;
                                }
                            }
                        `}
                    >
                        <p>{parrafo}</p>
                        <p>{segundo}</p>
                        <p>{tercero}</p>
                    </div>
                }
                
            </div>
            {
                slug==='li'
                ?   <div
                        css={css`
                            width: 95%;
                            align-items: center;
                            h3{
                                text-align:center;
                                font-size: 4rem;
                            }
                            li{
                                padding-left: 5rem;
                                width: 100%;
                                font-size: 2rem;
                            }
                        `}
                    >
                        <h3>{encabezado}</h3>
                        <ul>
                            <li>{linea}</li>
                        </ul>
                        
                    </div>
                :null
            }
            
        </>
     );
}
 
export default historiaPreview;