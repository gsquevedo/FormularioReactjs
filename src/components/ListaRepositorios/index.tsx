import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import styles from './styles.module.scss'

export function ListaRepositorios() {
  const [repos, setRepos] = useState([]);


  useEffect(() => {
    api
    .get("/users/gsquevedo/repos")
    .then((response) =>  {
      setRepos(response.data)
    })
    .catch((err) => {
        console.error("Ops! Ocorreu um erro" + err);
    });
  }, [])

  return (
    <div className={styles.listaRepositorio}>
        <h3>{ user.name } - { user.login }</h3>
        <h4>Lista de repositorios</h4>
        <ul>
          {
            repos.map(repos => (
              <li key={ repos.id } > { repos.name }</li>
            ))
          }
        </ul>
    </div>
  );
}
