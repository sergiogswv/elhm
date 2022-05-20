import { graphql, useStaticQuery } from 'gatsby';

const useCarrera = () => {

    const data = useStaticQuery(graphql`
    query{
        allDatoCmsCarrera(sort: {fields: titulo}){
            nodes{
                id
                titulo
                subtitulo
                contenido
                imagen{
                    gatsbyImageData(layout: CONSTRAINED)
                }
                slug
            }
        }
    }
    `)

    return data.allDatoCmsCarrera.nodes.map(carrera =>({
        titulo: carrera.titulo,
        subtitulo: carrera.subtitulo,
        contenido: carrera.contenido,
        imagen: carrera.imagen,
        id: carrera.id,
        slug: carrera.slug
    }))
   
}
 
export default useCarrera;