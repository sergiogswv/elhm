import { graphql, useStaticQuery } from 'gatsby';

const useService = () => {

    const data = useStaticQuery(graphql`
    query{
        allDatoCmsService{
            nodes{
                id
                titulo
                imagen{
                    gatsbyImageData(layout: FULL_WIDTH)
                }
                slug
                infohosp {
                    titulo
                        descripcion {
                            value
                        }
                    
                    }
                }
            }
        }
    `)

    return data.allDatoCmsService.nodes.map(service =>({
        titulo: service.titulo,
        imagen: service.imagen,
        id: service.id,
        slug: service.slug,
        infohosp: service.infohosp
    }))
   
}
 
export default useService;