const noteReducer = (state={
        showNote: undefined,
        notes: []
    }, action) => {
    switch(action.type){
        case 'ADD_NOTE': 
        return Object.assign({}, state, {
            title: action.noteData.title,
            content: action.noteData.content
          })
          default:
            return state
    }
}