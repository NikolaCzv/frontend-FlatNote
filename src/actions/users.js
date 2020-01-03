export const addUser = user => {
    return {
        type: 'ADD_USER',
        userData: {
            id: user.id, 
            username: user.username,
            notes: user.notes
        }
      };
}