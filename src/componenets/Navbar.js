import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

class Navbar extends React.Component {
    render(){
        return<div className='navbar'>
            <Segment inverted>
                < Link to='/note/new'> New Note </Link>
                < Link to='/'> Sign out </Link>
            </Segment>
            </div>
    }
}

export default Navbar