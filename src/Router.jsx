import React from 'react'
import { Switch, Route } from 'react-router'
import { Home, SignUp, SignIn, Reset, ProductEdit, ProductList } from './templates'
import Auth from './Auth'

const Router = () => {
    return (
        <Switch>
            <Route exact path={"/SignUp"} component={SignUp} />
            <Route exact path={"/SignIn"} component={SignIn} />
            <Route exact path={"/signin/reset"} component={Reset} />

            <Auth>
                <Route exact path={"(/)?"} component={ProductList} />
                <Route path={"/product/edit(/:id)?"} component={ProductEdit} />
            </Auth>
        </Switch>
    )
}
export default Router