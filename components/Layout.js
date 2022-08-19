import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, pagina, guitarra}) => {
  return (
    <div>
        <Head>
            <title>Guitar - {pagina}</title>
            <meta name='description' content='Sitio web de venta de guitarras' />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700;900&family=Open+Sans:wght@400;700;800&family=Poppins:wght@300&display=swap" rel="stylesheet"/>
        </Head>

       <Header
       guitarra = {guitarra}
       />

      {children}

      <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  guitarra:null
}

export default Layout
