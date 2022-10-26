'use strict';
import React, {useState} from "react";

export function Note (props) {

        const [showDescription, setShowDescription] = useState(true);

        const hideDescription = () => {
                setShowDescription(!showDescription);
        }

        const editHandler = () => {
                props.onEdit({
                        title: props.title,
                        description: props.description,
                        id: props.id
                });
        }
        return (
            <div className='Note'>
                <p onClick={hideDescription} className='Note__title'>{props.title}</p>
                    { showDescription && (
                    <div className='Note__description'>{props.description}</div>
                    )}


                <button onClick={editHandler} className="Note__button__edit">Edytuj</button>
                <button className="Note__button__delete" onClick={() => props.onDelete(props.id)}>Usuń</button>
            </div>
        )
}