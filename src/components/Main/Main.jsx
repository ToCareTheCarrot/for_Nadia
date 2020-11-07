import React from 'react';
import c from './Main.module.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import {MainButton} from "../MainButton/MainButton";
import {PositionBase} from "../PositionBase/PositionBase";
import {Settings} from "../Settings/Settings";
import PositionPage from "../PositionPage/PositionPage";


export const Main = () => {
    return (
        <div className={c.container}>
            <Switch>
                {/*<Route exact path='/' render={() => <Redirect to='/profile'/>} />*/}
                {/*<Route path='/profile/:userId?' render={() => <ProfileContainer />} />*/}
                <Route path='/main-page' render={() => <MainButton/>}/>
                <Route path='/position-page/:positionNumber?' render={() => <PositionPage/>}/>
                <Route path='/position-base' render={() => <PositionBase/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </Switch>
        </div>
    );
}

