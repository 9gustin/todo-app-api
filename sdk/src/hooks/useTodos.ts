import {useState} from 'react';

const [todos, setTodos] = useState([]);

const useNotes = () => {}; //TODO: Permitira usar el estado de las notas
const addNote = todo => {}; //TODO: Agregara una nota al state y a la BD mediante la api
const updateNote = todo => {}; //TODO: Actualizara una nota en el state y en la BD mediante la api
const deleteNote = todo => {}; //TODO: Eliminara una nota en el state y en la BD mediante la api

export default {
    useNotes,
    addNote,
    updateNote,
    deleteNote
};