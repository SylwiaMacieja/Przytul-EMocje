import React, {useState} from "react";
import './NewNote.scss'



export function NewNote(props) {
    const [showForm, setShowForm] = useState(false)
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');


    const handleTitle = event => {
        const value = event.target.value;
        setTitle(value);
    }
    const handleDescription = event => {
        const value = event.target.value;
        setDesc(value);
    }

    const addNote = () => {
        const note = {
            title: title,
            description: desc,
            id: props.id,
            key: props.id
        };
        props.onAdd(note);

        setTitle('');
        setDesc('');
        setShowForm(false);
    }


    return (
        showForm ? (
        <div className='NoteNew'>
            <label className='NoteNew__title'>Tytuł:</label>
            <input className='NoteNew__description'
                   type='text'
                   value={title}
                    id={props.id}
                   key={props.id}
                   onChange={handleTitle}/>
            <label className='NoteNew__title'>Opis:</label>
            <textarea className='NoteNew__description'
                      value={desc}
                      id={props.id}
                      key={props.id}
                      onChange={handleDescription}/>
            <button className='NoteNew__button__add'
                    onClick={addNote}>Dodaj notatkę</button>

        </div>
        ) : (
            <button className='NoteNew__button__new' onClick={() => setShowForm(true)}>Dodaj nową notatkę</button>
        )
    );
}

