import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions/notes'

class NewNote extends React.Component {

    state = {
        title: '',
        content: ''
    }

    handleSubmit = event => {
        event.preventDefault();

       const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                content: this.state.content,
                user_id: this.props.user.login.id
            })
        }


        fetch('http://localhost:3000/notes', reqObj)
        .then(resp => resp.json())
        .then(note => {
            this.props.addNote(note)
            this.props.history.push('/dashboard')
        })
        this.setState({
            title: '',
            content: ''
        })

    }

    handleChangeTitle = event => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeContent = event => {
        this.setState({
            content: event.target.value
        })
    }


    render(){
        return <div className="newNote">
            <form  onSubmit={(event) => this.handleSubmit(event)}>
                Title: < input type="text" onChange={this.handleChangeTitle}/><br></br>
                Content: < textarea type="text" onChange={this.handleChangeContent}/><br></br>
                <input type="submit"/><br></br>
            </form>
            </div>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNote: (newNote) => {
            dispatch(addNote(newNote))
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNote)