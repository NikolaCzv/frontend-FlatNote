export const addNote = note => {
    return {
        type: 'ADD_NOTE',
        noteData: {
            id: note.id,
            title: note.title,
            content: note.content,
            tags: []
        }
      };
}