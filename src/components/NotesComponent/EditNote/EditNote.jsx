import React, {useState} from "react";


export function EditNote (props) {

    const [title, setTitle] = useState(props.title);
    const [desc, setDesc] = useState(props.description);


    const handleTitle = event => {
        const value = event.target.value;
        setTitle(value);
    }
    const handleDescription = event => {
        const value = event.target.value;
        setDesc(value);
    }
    const editNote = () =>  {
        const note = {
            title: title,
            description: desc,
            id: props.id
        };
    props.onEdit(note)
    }

    return (
        <div className='NoteNew'>
            <label className='NoteNew__title'>Tytuł:</label>
            <input className='NoteNew__description'
                   type='text'
                   value={title}
                   onChange={handleTitle}/>
            <label className='NoteNew__title'>Opis:</label>
            <textarea className='NoteNew__description'
                      value={desc}
                      onChange={handleDescription}/>
            <button className='NoteNew__button__add'
                    onClick={editNote}>Zapisz zmiany</button>

        </div>
    )
}