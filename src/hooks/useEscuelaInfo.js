import { graphql, useStaticQuery } from 'gatsby';

const useEscuelaInfo = () => {

    const data = useStaticQuery(graphql`
    query{
        allDatoCmsServiciosescolar(sort: {fields: id}){
            nodes{
                titulo
            id
            descripcion
            }
        }
    }
    `)

    return data.allDatoCmsServiciosescolar.nodes.map(servicio =>({
        titulo: servicio.titulo,
        descripcion: servicio.descripcion,
        id: servicio.id,
    }))
   
}
 
export default useEscuelaInfo;