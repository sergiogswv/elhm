import { graphql, useStaticQuery } from 'gatsby';

const useHistoria = () => {

    const data = useStaticQuery(graphql`
    query{
        allDatoCmsHistory(sort: {fields: id}){
            nodes{
                parrafo
                segundoparrafo
                tercerparrafo
                id
                imagen{
                        gatsbyImageData(layout: CONSTRAINED)
                }
                encabezado
                linea
                slug
            }
        }
    }
    `)

    return data.allDatoCmsHistory.nodes.map(historia =>({
        imagen: historia.imagen,
        id: historia.id,
        parrafo: historia.parrafo,
        segundo: historia.segundoparrafo,
        tercero: historia.tercerparrafo,
        encabezado: historia.encabezado,
        linea: historia.linea,
        slug:historia.slug
    }))
   
}
 
export default useHistoria;