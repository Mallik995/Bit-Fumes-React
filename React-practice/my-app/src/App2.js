import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import routes from './utility/routes'


export default function App2() {
    return (
        <Router>
            <Header />
            <Switch>
                {routes.map((route, index) => (

                    < Route key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component} />
                ))
                }
            </Switch>
        </Router>)

}
