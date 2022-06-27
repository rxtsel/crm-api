import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './layout/Home'
import Clients from './pages/Clients'
import NewClient from './pages/NewClient'
import EditClient from './pages/EditClient'
import ViewClient from './pages/ViewClient'
import Index from './pages/Index'

function App () {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />}>
          <Route index element={<Index />} />
        </Route>

        <Route path='/clients' element={<Home />}>
          <Route index element={<Clients />} />
          <Route path='new-client' element={<NewClient />} />
          <Route path='edit/:id' element={<EditClient />} />
          <Route path=':id' element={<ViewClient />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
