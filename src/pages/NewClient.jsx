import Formulario from '../components/Formulario'

const NewClient = () => {
  return (
    <>
      <h1 className='panel__title'>Nuevo cliente</h1>
      <h2 className='panel__texto'>Por favor, llena los siguientes campos para agregar un cliente</h2>
      <Formulario />
    </>
  )
}

export default NewClient
