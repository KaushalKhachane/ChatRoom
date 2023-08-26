import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'
import { AuthProvider } from './utils/AuthContext'
import LoginPage from './pages/LoginPage'
import Room from './pages/Room'
import RegisterPage from './pages/RegisterPage'

function App() { 

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/Register' element={<RegisterPage />} />

          <Route element={<PrivateRoute />} >
            <Route path='/' element={<Room />} />
          </Route>

        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
