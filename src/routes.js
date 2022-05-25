import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import repositories from './Pages/Repository/repositories';
import Home from './Pages/Home/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/repositories" component={repositories} />
            </Switch>
        </BrowserRouter>
    )
}