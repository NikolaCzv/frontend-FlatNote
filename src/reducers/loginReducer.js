const login = (state= {
  showNote: undefined,
  notes: [],
  allNotes: []
}, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return Object.assign({}, state, {
              id: action.userData.id,
              username: action.userData.username,
              notes: action.userData.notes
            })
        case 'ADD_NOTE':
          return Object.assign({}, state, {
              showNote: undefined,
              notes: [...state.notes, action.noteData]
            })
        case 'SHOW_NOTE':
          return Object.assign({}, state, { 
            showNote: action.note
          })
        case 'DELETE_NOTE':
            return {
              ...state,
              notes: state.notes.filter(note => note.id !== action.note),
              showNote: undefined
            }
        case 'EDIT_NOTE':
          let index = state.notes.findIndex(note => note.id === action.note.id)
          state.notes[index] = action.note
          return Object.assign({}, state, {
            notes: [...state.notes], showNote: undefined})

        default: 
          return state
    }
}

export default login