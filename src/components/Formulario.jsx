import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import Errors from './Errors'
import Spinner from './Spinner'

const Formulario = ({ client, loading }) => {
  const navigate = useNavigate()
  const newClientScheme = Yup.object().shape({
    name: Yup.string()
      .min(3, 'El nombre debe tener al menos 3 caracteres')
      .max(50, 'El nombre debe tener menos de 50 caracteres')
      .required('El nombre es requerido.'),
    bussines: Yup.string().required('El nombre de la empresa es requerido.'),
    email: Yup.string()
      .email('Email no válido.')
      .required('El email es requerido.'),
    tel: Yup.number()
      .integer('Número no válido.')
      .positive('Número no válido.')
      .typeError('El teléfono debe ser un número.'),
    msj: ''
  })

  const handleSubmit = async (values) => {
    try {
      let response
      if (client.id) {
        // editando registro
        const url = `${import.meta.env.VITE_API_URL}/clients/${client.id}`

        response = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      } else {
        // creando registro
        const url = import.meta.env.VITE_API_URL

        response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }

      await response.json()
      navigate('/clients')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    loading
      ? <Spinner />
      : (
        <div className='form__content'>

          <Formik
            initialValues={{
              name: client?.name ?? '',
              bussines: client?.bussines ?? '',
              email: client?.email ?? '',
              tel: client?.tel ?? '',
              msj: client?.msj ?? ''
            }}
            enableReinitialize
            onSubmit={async (values, { resetForm }) => {
              await handleSubmit(values)
              resetForm()
            }}
            validationSchema={newClientScheme}
          >
            {({ errors, touched }) => {
              return (

                <Form className='form'>

                  <div className='form__campo'>
                    <Field
                      type='text'
                      className='form__input'
                      id='name'
                      placeholder='Nombre del cliente'
                      name='name'
                    />
                    {errors.name && touched.name
                      ? (
                        <Errors>{errors.name}</Errors>
                        )
                      : null}
                  </div>

                  <div className='form__campo'>
                    <Field
                      id='bussines'
                      type='text'
                      className='form__input'
                      placeholder='Empresa del cliente'
                      name='bussines'
                    />
                    {errors.bussines && touched.bussines
                      ? (
                        <Errors>{errors.bussines}</Errors>
                        )
                      : null}
                  </div>

                  <div className='form__campo'>
                    <Field
                      id='email'
                      type='email'
                      className='form__input'
                      placeholder='Email del cliente'
                      name='email'
                    />
                    {errors.email && touched.email
                      ? (
                        <Errors>{errors.email}</Errors>
                        )
                      : null}
                  </div>

                  <div className='form__campo'>
                    <Field
                      id='tel'
                      type='tel'
                      className='form__input'
                      placeholder='Número de teléfono'
                      name='tel'
                      minLength='10'
                    />
                    {errors.tel && touched.tel
                      ? (
                        <Errors>{errors.tel}</Errors>
                        )
                      : null}
                  </div>

                  <div className='form__campo'>
                    <Field
                      as='textarea'
                      id='msj'
                      className='form__input form__textarea'
                      placeholder='Observación...'
                      name='msj'
                    />
                  </div>

                  <input
                    type='submit'
                    value={client?.name ? 'Guardar cambios' : 'Agregar'}
                    className='form__submit'
                  />

                </Form>
              )
            }}
          </Formik>

        </div>
        )
  )
}

Formulario.defaultProps = {
  client: {},
  loading: false
}

export default Formulario
