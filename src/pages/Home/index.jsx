import './style.css'
import { useEffect, useState, useRef} from 'react'
import Trash from '../../assets/Trash.svg'
import api from '../../service/api'


function Home() {

  const [users, setUsers] = useState([])
  
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() {
  const usersFromApi = await api.get('/usuarios')
  
   setUsers(usersFromApi.data)
  console.log(users)
  }

  async function createUsers() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })

    getUsers()
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)

    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])
 
  


  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Formulario</h1>
        <input placeholder='Nome' nome='nome' type='text' ref={inputName} />
        <input placeholder='idade' nome='idade' type='number' ref={inputAge} />
        <input placeholder='email' nome='email' type='email' ref={inputEmail} />
        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map(user => (

        <div key={user.id} className='card'>
          <div >
            <p>Nome:  <span>{user.name}</span></p>
            <p>idade: <span>{user.age}</span></p>
            <p>Gmail: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} />
          </button>
        </div>

      ))}
    </div>

  )
}

export default Home
