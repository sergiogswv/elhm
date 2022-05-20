import React from 'react';
import Layout from '../components/layout'
import {css} from '@emotion/react'
import ServicePreview from "../components/servicePreview"
import useService from "../hooks/useService"
import styled from "@emotion/styled"

const ListadoServices = styled.ul`
  max-width: 1500px;
  width: 95%;
  margin: 4rem auto 0 auto;
  

  @media(min-width:768px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }
`

const Servicios = () => {
    const services = useService()
    //console.log(services)
    return( 
        <Layout>    

        <h2
            css={css`
                text-align: center;
                margin-top: 5rem;
                font-size:3rem;
                
            `}
        >Nuestros Servicios</h2>
        <div
            css={css`
                //height: calc(100vh - 56px - 56px - 52.5px);
                height: 100%;
            `}
        >
            <ListadoServices>
                {services.map(service=>(
                    <ServicePreview 
                        key={service.id}
                        service={service}
                    />
                ))}
            </ListadoServices>
        </div>

        
        </Layout>
    )
}
 
export default Servicios;