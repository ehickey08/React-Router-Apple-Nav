import React, {Component} from 'react';
import {Route} from 'react-router-dom'

import NavWrapper from './components/NavWrapper'
import SubNav from './components/SubNav'

import {tabInfo} from './tabInfo'
import './App.css';

export default class App extends Component {
    state = {
        data: tabInfo
    }

    render(){
        return(
            <>
            <Route path ="/" render = {(props)=> <NavWrapper {...props} tabs ={this.state.data}/>} />
            {this.state.data.map(tab => {
                return <Route path={`/${tab.title}`} render={(props) => <SubNav {...props} tab={tab} />}/>

            })}
            </>
        );
    }
}
