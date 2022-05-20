import { graphql, useStaticQuery } from 'gatsby';

const useCarreraInfo = () => {

    const data = useStaticQuery(graphql`
    query{
        allDatoCmsService(filter: {slug: {eq : "escuela"}} ){
            nodes{
                titulo
                imagen{
                    gatsbyImageData
                }
                contenido{
                    titulo
                    descripcion
                    ocuparen
                    id
                    carrera
                }
                slug
                id
                  
            }
        }
    }
    `)

    return data.allDatoCmsService.nodes.map(info =>({
        titulo: info.titulo,
        subtitulo: info.subtitulo,
        contenido: info.contenido,
        id: info.id,
        slug: info.slug
    }))
   
}
 
export default useCarreraInfo;