export const renderNote = note => {
    return {
        type: 'SHOW_NOTE',
        note: note.id
    }
} 