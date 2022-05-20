import React from 'react';
import {Link} from 'gatsby'
import styled from '@emotion/styled'

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    @media (min-width:768px){
        padding-bottom: 0;
    }
`
const NavLink = styled(Link)`
    color: #000;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1;
    font-family: 'PT sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    &:last-of-type{
        margin-right: 0;
    }
    &.pagina-actual{
        border-bottom: 2px solid #000;
    }
    @media(min-width:320px) and (max-width: 767px){
        font-size: 1.3rem;
    }
`

const Navegacion = () => {
    return (
        <Nav>
            <NavLink 
                activeClassName='pagina-actual'
                to={'/'}>Inicio</NavLink>
            <NavLink 
                activeClassName='pagina-actual'
                to={'/servicios'}>Servicios</NavLink>
            <NavLink 
                activeClassName='pagina-actual'
                to={'/nosotros'}>Nosotros</NavLink>
            <NavLink 
                activeClassName='pagina-actual'
                to={'/contacto'}>Contacto</NavLink>
        </Nav>
    );
}
 
export default Navegacion;