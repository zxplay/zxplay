import React, {Fragment, useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import "primereact/resources/themes/md-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Nav from "./Nav";
import Demo from "./Demo";
import About from "./About";
import Search from "./Search";
import NotFound from "./NotFound";
import {exit, renderEmulator} from "../redux/actions/jsspeccy";

export default function App() {
    return (
        <Fragment>
            <RenderEmulator/>
            <Nav/>
            <div className="main-content" style={{maxWidth: '1024px', margin: 'auto'}}>
                <Switch>
                    <Route exact path="/">
                        <Demo/>
                    </Route>
                    <Route exact path="/about">
                        <About/>
                    </Route>
                    <Route path="/search">
                        <Search/>
                    </Route>
                    <Route>
                        <NotFound/>
                    </Route>
                </Switch>
            </div>
        </Fragment>
    )
}

function RenderEmulator() {
    const dispatch = useDispatch();

    // NOTE: Using simple component function so emulator is rendered early.

    useEffect(() => {
        dispatch(renderEmulator(2));
        return () => {dispatch(exit())}
    }, []);

    return (
        <Fragment/>
    )
}
