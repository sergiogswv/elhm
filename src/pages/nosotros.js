import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Contenedor = styled.main`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2 1fr);
    column-gap: 3rem;
  }
  p {
    line-height: 2;
    margin-top: 2rem;
  }
  .banner {
    margin-top: -10%;
    z-index: -1;
    align-items: center;
    align-content: center;
  }
`
const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #e2ffff;
  width: 100%;
  color: #000;
  display: block;
  text-decoration: none !important;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  font-size: 2rem;
`

const Nosotros = () => {
  const resultado = useStaticQuery(graphql`
    query {
      allDatoCmsNosotro {
        nodes {
          contenido {
            titulo
            descripcion
            id
          }
        }
      }
    }
  `)

  const { contenido } = resultado.allDatoCmsNosotro.nodes[0]

  //ssdconsole.log(contenido)
  return (
    <>
      <Layout>
        <h2
          css={css`
            margin-top: 4rem;
            text-align: center;
            font-size: 4rem; ;
          `}
        >
          Acerca de Nosotros
        </h2>
        <Contenedor>
          {contenido.map(content => {
            return (
              <div
                key={content.id}
                css={css`
                  font-size: 2rem;
                `}
              >
                <h3>{content.titulo}</h3>
                <p
                  css={css`
                    text-align: justify;
                  `}
                >
                  {content.descripcion}
                </p>
              </div>
            )
          })}

          <Boton to={"/patronato"}>Patronato</Boton>
          <Boton to={"/organigrama"}>Organigrama</Boton>
        </Contenedor>
      </Layout>
    </>
  )
}

export default Nosotros
