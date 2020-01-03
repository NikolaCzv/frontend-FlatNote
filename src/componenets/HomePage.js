import React from 'react'
import { Link } from 'react-router-dom'

class HomePage extends React.Component{

    render(){
        return(
            <div className='homePage'>
                <h2>FlatNote</h2>
                < Link to='/login'> Login </Link>
            </div>
        )
    }

}

export default HomePage