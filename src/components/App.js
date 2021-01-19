import React from "react"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AppQuestion from "./Dashboard"
import Login from "./Login"
import Test from "./Test"
import Signup from "./Signup"
import PrivateRoute from "./PrivateRoute"

function App() {
  return (

        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={AppQuestion} />
              <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/test" component={Test} />
                </div>
              </Container>
            </Switch>
          </AuthProvider>
        </Router>
  )
}

export default App
