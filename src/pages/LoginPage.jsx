import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from '../utils/AuthContext'


const LoginPage = () => {
  const { user, handleUserLogin } = useAuth();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, []);

  const handleInputChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    setCredentials({ ...credentials, [name]: value });
    console.log(credentials)
  }

  return (
    <div className="auth--container">
      <div className="form--wrapper">
        <form onSubmit={(e) => {handleUserLogin(e, credentials)}}>
          <div className="filed--wrapper">
            <label htmlFor="">Email: </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Enter Your Email..."
              value={credentials.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="filed--wrapper">
            <label htmlFor="">Password: </label>
            <input
              type="password"
              required
              name="password"
              placeholder="Enter Password..."
              value={credentials.password}
              onChange={handleInputChange}
            />

            <div className="field--wrapper">
              <input
                type="submit"
                value="Login"
                className="btn btn--lg btn--main"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}


export default LoginPage