import { graphql, useStaticQuery } from 'gatsby';

const useEscuela = () => {

    const data = useStaticQuery(graphql`
    query{
        allDatoCmsEscuela{
            nodes{   
                id
                titulo
                imagen{
                    gatsbyImageData(layout: CONSTRAINED)
                }
                slug
            }
        }
    }
    `)

    return data.allDatoCmsEscuela.nodes.map(carrera =>({
        titulo: carrera.titulo,
        subtitulo: carrera.subtitulo,
        contenido: carrera.contenido,
        imagen: carrera.imagen,
        id: carrera.id,
        slug: carrera.slug
    }))
   
}
 
export default useEscuela;
