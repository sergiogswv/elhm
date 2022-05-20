import React from 'react';  
import {css} from '@emotion/react' 
import {Link} from 'gatsby'
import styled from '@emotion/styled';

const Enlace = styled(Link)`
  color: #2149C4;
`

const Alerta = () => {
    return ( 
       <>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <h1 css={css`text-align: center;`}><strong>¡Inscribete!</strong> a nuestra Oferta Educativa. <Enlace to={'/servicios/escuela/tramites-escolares/medicina'}>¡Me interesa!</Enlace></h1>
          
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
       </>
     );
}
 
export default Alerta;