import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'
import { AuthProvider } from './utils/AuthContext'
import LoginPage from './pages/LoginPage'
import Room from './pages/Room'

function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<LoginPage />} />

          <Route element={<PrivateRoute />} >
            <Route path='/' element={<Room />} />
          </Route>

        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
