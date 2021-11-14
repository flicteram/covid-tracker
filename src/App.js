import React,{useContext} from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Regions from './Pages/Regions';
import Country from './Pages/Country'
import Search from './Pages/Search';
import Compare from './Pages/Compare';
import { Context } from './Components/Context/Context';

function App() {

  return (
    <div className='appContainer'>
        <Switch>
        <Route exact path='/'>
        <Home/>
        </Route>
        <Route path='/regions/:continentName'>
        <Regions/>
        </Route>
        <Route path='/country/:countryName'>
        <Country/>
        </Route>
        <Route path='/search'>
        <Search/>
        </Route>
        <Route path='/compare'>
        <Compare/>
        </Route>
        </Switch>
    </div>
  );
}

export default App;
