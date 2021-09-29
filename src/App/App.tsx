import React from "react";
import {Route, Switch} from "react-router-dom";
import Main from "../a1-root/v1-Main/Main";


function App() {

    return (
        <>
            <Switch>
                <Route exact path={"/"} render={() => <Main/>}/>
                <Route path={"*"} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
            </Switch>
        </>
    )
}

export default App

