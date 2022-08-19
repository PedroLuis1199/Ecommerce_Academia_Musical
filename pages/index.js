
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({guitarras, curso, entradas}) {
//console.log(entradas)
  return (

     <Layout pagina = 'Inicio'
     
     guitarra = {guitarras[3]}//prop para mostrars una guitarra en el header
     >

        <main className='contenedor'>
           <h1 className='heading'>Nuestra coleccion</h1>
           <Listado
           guitarras={guitarras}
           />
        </main>

        <Curso
        curso = {curso}
        />

        <section className='contenedor'>
        <ListadoBlog
          entradas={entradas}
          />
        </section>
                

     </Layout>



  )
}
export async function getServerSideProps(){

   //Consultas Multiples
 
   const urlGuitarras = `${process.env.API_URL}/guitarras`
   const urlCursos = `${process.env.API_URL}/cursos`
   const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

   const [resGuitarras, resCursos, resBlog] =await Promise.all([
     fetch(urlGuitarras),
     fetch(urlCursos),
     fetch(urlBlog)


   ])

   const [guitarras, curso, entradas] =await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json()

  ])
 
   return{
     props: {
       guitarras,
       curso,
       entradas
     }
   }
 }
 