import { useNavigate } from 'react-router-dom'

const Client = ({ client, handleDelete }) => {
  const navigate = useNavigate()
  const { name, bussines, email, tel, id } = client
  const view = 'src/img/view.svg'
  const edit = 'src/img/edit.svg'
  const trash = 'src/img/trash.svg'
  return (
    <tr className='client-tr'>
      <td className='client__text'>{name}</td>
      <td className='client__text'>{bussines}</td>
      <td className='client__text'>{email}</td>
      <td className='client__text'>{tel}</td>
      <td className='client__text buttons'>
        <button
          className='client__button view'
          type='button'
          title='VER'
          onClick={() => {
            navigate(`/clients/${id}`)
          }}
        >
          <img src={view} alt='puede ser un icono de un ojo para ver más opciones' />
        </button>

        <button
          className='client__button edit'
          type='button'
          title='EDITAR'
          onClick={() => {
            navigate(`/clients/edit/${id}`)
          }}
        >
          <img src={edit} alt='puede ser un icono de un lapiz para editar' />
        </button>

        <button
          className='client__button delete'
          type='button'
          title='ELIMINAR'
          onClick={() => {
            handleDelete(id)
          }}
        >
          <img src={trash} alt='puede ser un icono de una papelera para eliminar' />
        </button>
      </td>
    </tr>
  )
}

export default Client
