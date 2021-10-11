import React from 'react'
import './Header.css'
import globe from '../Images/globe.png'
import loop from '../Images/nav-glass.png'
import compare from '../Images/statistics.png'
import {Link} from 'react-router-dom'

function Header(){
    return(
    <nav className='nav'>
        <Link to='/'><img className='earthImg' src={globe} alt={'global data'} /></Link>
        <Link to='/search'><img  className='loop' src={loop} alt={'search'}/></Link>
        <Link to='/compare'><img className='compare' src={compare}/></Link>
    </nav>
    )
}

export default Header