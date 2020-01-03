import React from 'react'
import { connect } from 'react-redux'
import NoteCard from './NoteCard'
import { renderNote } from '../actions/renderNote'
import { deleteNote } from '../actions/deleteNote'
import { editNote } from '../actions/editNote'
import { Image, List, Grid } from 'semantic-ui-react'

class NoteList extends React.Component {

    render(){
        console.log('afasf', this.props.user.login.notes.find(note => note.id === this.props.user.login.showNote))
        return  <Grid>
            <Grid.Column floated='left' width={5}>
                        <h4>Note List</h4>
                            {this.props.user.login.notes.map(note => {
                        return <List animated verticalAlign='middle'>
                            <List.Item>
                                <div>
                                    <Image onClick={() => this.props.renderNote(note)} avatar src='https://www.becomingminimalist.com/wp-content/uploads/2008/07/post-it-note.jpg' />
                                    <List.Content>
                                        <List.Header >{note.title}</List.Header>
                                    </List.Content>
                                </div>
                                </List.Item>
                            </List>
                })}
                </Grid.Column>


                <Grid.Column floated='right' width={5}>
                <div>
                    {this.props.user.login.showNote ? 
                    < NoteCard
                        note={this.props.user.login.notes.find(note => note.id === this.props.user.login.showNote)} 
                        delete={this.props.delete}
                        editNote={this.props.editNote}
                        /> :
                    null}
                </div>
                </Grid.Column>
            </Grid>
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