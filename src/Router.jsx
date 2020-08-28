import React from 'react'
import { Switch, Route } from 'react-router'
import { Home, SignUp, SignIn } from './templates'

const Router = () => {
    return (
        <Switch>
            <Route exact path={"/SignUp"} component={SignUp} />
            <Route exact path={"/SignIn"} component={SignIn} />
            <Route exact path={"(/)?"} component={Home} />
        </Switch>
    )
}
export default Router