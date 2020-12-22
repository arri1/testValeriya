import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Login from "./page/login";
import SignIn from "./page/signIn";
import client from "./utils/apollo";
import TodoList from "./page/todoList";
import Registration from "./page/registration";
import Profile from "./page/profile";
import Home from "./page/home";

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <Route exact path={"/login"} component={Login} />
                    <Route exact path={"/signIn"} component={SignIn} />
                    <Route exact path={"/todoList"} component={TodoList} />
                    <Route
                        exact
                        path={"/registration"}
                        component={Registration}
                    />
                    <Route exact path={"/home"} component={Home} />
                    <Route exact path={"/profile"} component={Profile} />
                    <Login></Login>
                </Switch>
            </Router>
        </ApolloProvider>
    );
};

export default App;
