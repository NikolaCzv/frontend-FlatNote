import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions/users'
import { Button, Form, Image } from 'semantic-ui-react'

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
                <Image src='https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png' size='medium' circular/>
                <Form onSubmit={(event) => this.handleSubmit(event)}>
                    <h3>Login page</h3>
                    <input type="text"
                        onChange={(event) => this.handleChange(event)}
                        value={this.state.username}/>
                    <br></br>
                    <Button type='submit' basic color='white'>Submit</Button>
                </Form>
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