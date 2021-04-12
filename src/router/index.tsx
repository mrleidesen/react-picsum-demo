import React from 'react'
import {
    Switch,
    Route,
    HashRouter
} from 'react-router-dom'

// Pages
import List from '@/pages/List'
import Random from '@/pages/Random'
// Components
import NavBar from '@/components/NavBar'

export default function AppRouter() {
    return (
        <HashRouter>
            <NavBar />
            <div className="wrapper">
                <Switch>
                    {renderRoutes()}
                </Switch>
            </div>
        </HashRouter>
    )
}

const renderRoutes = () => {
    const routes = [
        {
            path: "/",
            component: List,
            exact: true
        },
        {
            path: "/random",
            component: Random,
        }
    ]

    return (
        <>
            {routes.map(route => (
                <Route key={route.path} path={route.path} exact={route.exact}>
                    <route.component></route.component>
                </Route>
            ))}
        </>
    )
}