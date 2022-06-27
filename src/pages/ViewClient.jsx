import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const ViewClient = () => {
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
    loading
      ? <Spinner />
      : Object.keys(client).length === 0
        ? <h1>No hay resultados. ☹️</h1>
        : (
          <div>
            <h1 className='panel__title mb'>Información del cliente cliente.</h1>

            {
        client.name && (
          <p className='view-client__text'>
            <span className='view-client__span'>
              Nombre: {' '}
            </span>
            {client.name}
          </p>
        )
      }

            {
        client.bussines && (
          <p className='view-client__text'>
            <span className='view-client__span'>
              Empresa: {' '}
            </span>
            {client.bussines}
          </p>
        )
      }

            {
        client.email && (
          <p className='view-client__text'>
            <span className='view-client__span'>
              E-mail: {' '}
            </span>
            {client.email}
          </p>
        )
      }

            {
        client.tel && (
          <p className='view-client__text'>
            <span className='view-client__span'>
              Tel: {' '}
            </span>
            {client.tel}
          </p>
        )
      }

            {client.msj && (
              <p className='view-client__text'>
                <span className='view-client__span'>
                  Notas: {' '}
                </span>
                {client.msj}
              </p>
            )}
          </div>
          )
  )
}

export default ViewClient
