import React, {useState} from "react";


export function EditNote (props) {

    const [titleEdit, setTitleEdit] = useState(props.title);
    const [descEdit, setDescEdit] = useState(props.description);


    const handleTitle = event => {
        const value = event.target.value;
        setTitleEdit(value);
    }
    const handleDescription = event => {
        const value = event.target.value;
        setDescEdit(value);
    }
    const editNote = () =>  {
        const note = {
            title: titleEdit,
            description: descEdit,
            id: props.id
        };
    props.onEdit(note)
    }

    return (
        <div className='NoteNew'>
            <label className='NoteNew__title'>Tytuł:</label>
            <input className='NoteNew__description'
                   type='text'
                   value={titleEdit}
                   onChange={handleTitle}/>
            <label className='NoteNew__title'>Opis:</label>
            <textarea className='NoteNew__description'
                      value={descEdit}
                      onChange={handleDescription}/>
            <button className='NoteNew__button__add'
                    onClick={() => editNote()}>Zapisz zmiany</button>
        </div>
    )
}