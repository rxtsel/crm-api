import { Outlet, Link, useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation()
  const actualUrl = location.pathname
  return (
    <div className='home__content'>

      <div className='home__sidebar'>
        <a href='/'><h2 className='home__title'>CRM - CLIENTS</h2></a>
        <nav className='home__nav'>
          <Link
            className={`home__nav--link ${actualUrl === '/clients' ? 'active' : ''}`}
            to='/clients'
          >
            Clientes
          </Link>
          <Link
            className={`home__nav--link ${actualUrl === '/clients/new-client' ? 'active' : ''}`}
            to='/clients/new-client'
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>

      <div className='home__panel'>
        <Outlet />
      </div>

    </div>
  )
}

export default Home
