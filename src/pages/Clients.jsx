import { useState, useEffect } from 'react'
import Client from '../components/Client'

const Clients = () => {
  const [clients, setClients] = useState([])

  // obtener clientes de bd
  useEffect(() => {
    const getClientsAPI = async () => {
      try {
        const url = import.meta.env.VITE_API_URL
        const response = await fetch(url)
        const result = await response.json()
        setClients(result)
      } catch (error) {
        console.log(error)
      }
    }

    getClientsAPI()
  }, [])

  const handleDelete = async (id) => {
    const confirm = window.confirm('¿Estas seguro de eliminar este cliente?')

    if (confirm) {
      try {
        const url = `${import.meta.env.VITE_API_URL}/clients/${id}`
        const response = await fetch(url, {
          method: 'DELETE'
        })
        await response.json()

        const newClients = clients.filter(client => client.id !== id)
        setClients(newClients)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>
      <h1 className='panel__title'>Clientes</h1>
      <h2 className='panel__texto'>Administra tus clientes.</h2>

      <table className='clients-tabla'>
        <thead className='clients-tabla__thead'>
          <tr>
            <th className='clients-tabla__th'>Nombre</th>
            <th className='clients-tabla__th'>Empresa</th>
            <th className='clients-tabla__th'>E-mail</th>
            <th className='clients-tabla__th'>Telefono</th>
            <th className='clients-tabla__th'>Acción</th>
          </tr>
        </thead>

        <tbody className='clients-tabla__tbody'>
          {clients.map(client => (
            <Client
              key={client.id}
              client={client}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>

      </table>
    </>
  )
}

export default Clients
