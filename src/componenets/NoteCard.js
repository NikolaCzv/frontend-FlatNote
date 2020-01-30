import React from 'react'
import '../NoteCard.css'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Form, TextArea, Button } from 'semantic-ui-react'


class NoteCard extends React.Component {

    state = {
        title: this.props.note.title,
        content: this.props.note.content,
        tags: this.props.note.tags,
        edit: false
    }

    handleDelete = () => {
        fetch(`http://localhost:3000/notes/${this.props.note.id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(note => this.props.delete(note))
        this.props.history.push('/dashboard')
    }

    handleSubmit = event => {
        event.preventDefault()

        const reqObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                content: this.state.content
            })
        }

        fetch(`http://localhost:3000/notes/${this.props.note.id}`, reqObj)
        .then(resp => resp.json())
        .then(note => this.props.editNote(note))
        this.props.history.push('/dashboard')
        this.setState({
            edit: false
        })
    }

    handleEdit = () => {
        this.setState({
            edit: true
        })
    }

    changeTitleInput = event => {
        this.setState({
            title: event.target.value
        })
    }

    changeContentInput = event => {
        this.setState({
            content: event.target.value
        })
    }

    renderTags = () => {
        return this.props.note.tags.map( tag => {
           return <p>#{tag.name}</p>
        })
    }

    render(){
        return(
         <div className="Card" >
             <div>
             {this.state.edit ? 
             <Form onSubmit={event => this.handleSubmit(event)}>
                 Title: <input 
                 type='text'
                 value={this.state.title}
                 onChange={event => this.changeTitleInput(event)}/>

                 Content: < TextArea type="text" 
                 value={this.state.content}
                 onChange={event => this.changeContentInput(event)}/>

                < input type='submit' />
             </Form>
                :
                <div>
                 <h6> {this.props.note.title} </h6>
                 <p>{this.props.note.content}</p>
                 {this.renderTags()}
                 <Button.Group basic>
                    <Button onClick={this.handleDelete} > Delete </Button>
                    <Button onClick={this.handleEdit}> Edit</Button>
                </Button.Group>
                </div>}
                </div>
        </div>)
    }
}

export default withRouter(connect(null, null)(NoteCard))