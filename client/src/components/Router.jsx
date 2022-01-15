import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AllSongs from './AllSongs'
import Detail from './Detail'
import Home from './Home'
function Router() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/albums">
                    <Detail />
                </Route>
                <Route path='/allsongs'>
                    <AllSongs/>
                </Route>
                <Route path="*">
                    <div>Error</div>
                </Route>
            </Switch>
        </div>
    )
}

export default Router
