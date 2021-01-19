import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import Products from './questions';
import './app.css';

function AppQuestion() {

  const [ setError] = useState("")
  const { logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div className="App">
      <header>
        <button className="btn btn-secondary w-20 mt-3  text-center" style={{ color: "white" , marginLeft: 10 , fontSize : 25 }} onClick={handleLogout}>
         Log Out
        </button>

      </header>
        <Products />
    </div>
  );
}

export default AppQuestion;
