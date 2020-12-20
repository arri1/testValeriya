import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import Login from './page/login'
import Signup from './page/signup'
import client from './utils/apollo'
import TodoList from './page/todoList'

const App = () => {
    return (
        <ApolloProvider client={client}> 
            <Router>
                <Switch>
                    <Route exact path={'/login'} component={Login} />
                    <Route exact path={'/signup'} component={Signup} />
                    <Route exact path={'/todoList'} component={TodoList} />
                </Switch>
            </Router>
        </ApolloProvider>

    )
}

export default App
