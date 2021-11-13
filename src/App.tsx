import styles from './App.module.scss'
import { Formulario } from './components/Formulario'
import { TelaBox } from './components/TelaBox'
import { Footer } from './components/Footer'
import { ListaRepositorios } from './components/ListaRepositorios'
import { TelaBox1 } from './components/TelaBox1'

function App() {

  return (
    // PARA VER A TELA DE LISTA DE REPOSITORIOS 
    // (comente a tela de formulario)
    /*<main className={styles.contentWrapper}>
      <TelaBox1/>
      <ListaRepositorios/>
      <Footer/>
    </main>*/

    // PARA VER A TELA DE FORMULARIO
    // (comente a tela da lista de repositorios)
    <main className={styles.contentWrapper}>
      <TelaBox/>
      <Formulario/>
      <Footer/>
    </main>

  )
}

export default App
