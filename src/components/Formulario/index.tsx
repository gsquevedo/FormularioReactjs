import styles from './styles.module.scss'
import { Link } from 'react-router-dom';

export function Formulario(){
    
    const navigationPage = () => {
        console.log("Abrir pagina de lista de repositorios");
    }
    
    return(
        <div className={styles.messageListWrapper}>
            <ul className={styles.messageList}>
                <div className={styles.loginForm}>
                    <h3>ACESSE A PLATAFORMA</h3>
                        <form>
                            <div className={styles.input}>
                                <label> Login: </label>
                                <input type="login"/>
                                <label> Nome: </label>
                                <input type="name"/>
                                <label> Senha: </label>
                                <input type="password"/>
                            </div>
                            <div>
                                <button className={styles.criar} type="submit" onClick={navigationPage}
                                    size="large">LOGAR</button>
                            </div>
                        </form>
                </div>
            </ul>
        </div>
    )
}