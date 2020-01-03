import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions/users'

class Login extends React.Component{

    state = {
        username: 'Nikola',
        notes: [],
        allNotes: []
    }

    handleSubmit = event => {
        event.preventDefault();

       const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                notes: this.state.notes
            })
        }


        fetch('http://localhost:3000/users', reqObj)
        .then(resp => resp.json())
        .then(user => {
            console.log(user)
            this.props.addUser(user)
            this.props.history.push('/dashboard')
        })
        this.setState({
            username: '',
            notes: []
        })
    }

    handleChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    render(){
        return(
            <div className='login'>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <h3>Login page</h3>
                    <input type="text"
                        onChange={(event) => this.handleChange(event)}
                        value={this.state.username}/>
                    <br></br>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: (newUser) => {dispatch(addUser(newUser))}
    }
}

export default connect(null, mapDispatchToProps)(Login)