import { graphql, useStaticQuery } from 'gatsby';

const useLinks = () => {

    const data = useStaticQuery(graphql`
    query{
        allDatoCmsLink{
            nodes{
                id
                titulo
                paciente{
                    url
                }
            }	
        }
    }
    `)

    return data.allDatoCmsLink.nodes.map(link =>({
        titulo: link.titulo,
        paciente: link.paciente,
        id: link.id
    }))
   
}
 
export default useLinks;
