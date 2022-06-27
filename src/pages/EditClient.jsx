import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Formulario from '../components/Formulario'

const EditClient = () => {
  const [client, setClient] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const getClientApi = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/clients/${id}`
        const response = await fetch(url)
        const result = await response.json()
        setClient(result)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getClientApi()
  }, [])
  return (
    <>
      <h1 className='panel__title'>Editar Cliente</h1>
      <h2 className='panel__texto'>Por favor, utiliza los siguientes campos para editar el cliente</h2>

      {
        client.name && (
          <Formulario
            client={client}
            loading={loading}
            setClient={setClient}
          />
        )
      }
    </>
  )
}

export default EditClient
