import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import NoteList from './NoteList'


class Dashboard extends React.Component{

    render(){
        return(
            <div className='dashboard'>
                < Navbar />
                <h3> Hi, {this.props.user.login.username} </h3>
                < NoteList />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        user: state
    }
}

export default connect(mapStateToProps)(Dashboard)