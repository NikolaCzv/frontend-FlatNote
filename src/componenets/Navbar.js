import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    render(){
        return<div className='navbar'>
                < Link to='/note/new'> New Note </Link>
                < Link to='/'> Sign out </Link>
            </div>
    }
}

export default Navbar