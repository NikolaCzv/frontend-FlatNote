export const deleteNote = note => {
    return {
        type: 'DELETE_NOTE',
        note: note.id
    }
} 