import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'semantic-ui-react'

class HomePage extends React.Component{

    render(){
        return(
            <div className='homePage'>
                <Image src='https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png' size='medium' rounded/>
                <h2>FlatNote</h2>
                < Link to='/login'> Login </Link>
            </div>
        )
    }

}

export default HomePage