export const createProject = (project) => {
    return(dispatch,getState, { getFirebase, getFirestore }) => {
        //mak easyn call here
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName:'Annu',
            authorLastName:'Sachdeva',
            authorId: 12345678,
            createdId: new Date()
        }).then(() =>{
                dispatch({
                    type: 'CREATE_PROJECT',
                    project
                });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })

    }
};