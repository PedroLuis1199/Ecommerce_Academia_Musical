
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    
    <Layout 
    
    pagina= 'Nosotros'>

    <main className='contenedor'>

      <h2 className='heading'>Nosotros</h2>

      <div className={styles.contenido}>
        <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Imagen sobre nosotros'/>
        <div>
          <p>Aliquam mauris augue, egestas ut commodo nec, efficitur ut velit. Curabitur feugiat enim ac hendrerit sodales. Duis sollicitudin ullamcorper tellus, at pulvinar est pharetra non. Duis consectetur condimentum nulla, sit amet sagittis risus suscipit et. Aenean efficitur libero sit amet ultricies faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque pellentesque rhoncus porta. In ut lorem faucibus, egestas nibh venenatis, laoreet lacus. Nulla viverra luctus suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing eli.</p>
          <p>Aliquam mauris augue, egestas ut commodo nec, efficitur ut velit. Curabitur feugiat enim ac hendrerit sodales. Duis sollicitudin ullamcorper tellus, at pulvinar est pharetra non. Duis consectetur condimentum nulla, sit amet sagittis risus suscipit et. Aenean efficitur libero sit amet ultricies faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque pellentesque rhoncus porta. In ut lorem faucibus, egestas nibh venenatis, laoreet lacus. Nulla viverra luctus suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
      </div>

    </main>

    </Layout>
  )
}

export default Nosotros
