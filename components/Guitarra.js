import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Guitarra.module.css'



const Guitarra = ({guitarra}) => {

const {nombre, descripcion, imagen, precio, url} = guitarra

  return (
    <div className={styles.guitarra}>
       <Image priority='true' layout='responsive' width={150} height={350} src = {imagen.url} alt = {`imagen guitarra ${nombre}`} />
       <div className={styles.contenido}>
            <h3>{nombre}</h3> 
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
           

            <Link href={`/guitarras/${url}`}>
                <a className={styles.enlace}>
                Ver Producto 
                </a>
            </Link>
           
       </div>
    </div>
  )
}

export default Guitarra
