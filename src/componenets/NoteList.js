import React from 'react'
import { connect } from 'react-redux'
import NoteCard from './NoteCard'
import { renderNote } from '../actions/renderNote'
import { deleteNote } from '../actions/deleteNote'
import { editNote } from '../actions/editNote'

class NoteList extends React.Component {

    render(){
        console.log('afasf', this.props.user.login.notes.find(note => note.id === this.props.user.login.showNote))
        return<div>
                <h4>Note List</h4>
                {this.props.user.login.notes.map(note => {
                    return <div><li onClick={() => this.props.renderNote(note)}>{note.title}</li></div>
                })}
                <div>
                    {this.props.user.login.showNote ? 
                    < NoteCard
                        note={this.props.user.login.notes.find(note => note.id === this.props.user.login.showNote)} 
                        delete={this.props.delete}
                        editNote={this.props.editNote}
                        /> :
                    null}
                </div>
            </div>
    }

}

const mapStateToProps = state => {
    return {
        user: state,
        showNote: state.showNote
    }
}

const mapDispatchToProps = dispatch => {
    return {
        renderNote: (newNote) => {dispatch(renderNote(newNote))},
        delete: note => {dispatch(deleteNote(note))},
        editNote: note => {dispatch(editNote(note))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)