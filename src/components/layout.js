import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import { Global, css } from '@emotion/react';
import Helmet from 'react-helmet'
import useSeo from '../hooks/use-seo'

const Layout = (props) => {

    const seo = useSeo()

    const {siteName, fallbackSeo: {description, title}} = seo

    return ( 
        <>
            <Global 
                styles={css`
                    html{
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *,*:before, *:after{
                        box-sizing: inherit;
                    }
                    body{
                        font-size: 32px;
                        font-size: 3.2rem;
                        line-height: 1.5;
                    }
                    h1, h2, h3{
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1,h2{
                        font-family: 'Roboto', serif;
                    }
                    h1{
                        font-family: 'PT sans', sans-serif;
                    }
                    ul{
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    p{
                        font-size: 1.5rem;
                    }
                    input{
                        font-size: 2rem;
                    }
                `}
            />
            <Helmet>
                <title>{siteName}</title>
                <meta name='description' content={description}></meta>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"/>
                {/*
                <link href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' rel='stylesheet'/>*/}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
            </Helmet>
            <Header></Header>
            {props.children}
            <Footer 
                title={title}
            />
            
        </>
     );
}
 
export default Layout;