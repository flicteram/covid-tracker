import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

function Header(){
    const iconsStyles={
        fontSize:'45px',
        color:'white',
        transition:'color 500ms',
        '&:hover':{
            color:'rgb(113, 149, 255)',
        }
    }
    return(
    <nav className='nav'>
        <Link to='/'><PublicIcon sx={iconsStyles}/></Link>
        <Link to='/search'><SearchIcon sx={iconsStyles}/></Link>
        <Link to='/compare'><StackedLineChartIcon sx={iconsStyles}/></Link>
    </nav>
    )
}

export default Header