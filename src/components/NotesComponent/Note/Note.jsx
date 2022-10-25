'use strict';
import React, {useState} from "react";

export function Note (props) {

        const [showDescription, setShowDescription] = useState(true);

        const changeDescription = () => {
                setShowDescription(!showDescription);
        }
        return (
            <div className='Note'>
                <p onClick={changeDescription} className='Note__title'>{props.title}</p>
                    { showDescription && (
                    <div className='Note__description'>{props.description}</div>
                    )}


                <button className="Note__button__edit">Edytuj</button>
                <button className="Note__button__delete" onClick={() => props.onDelete(props.id)}>Usuń</button>
            </div>
        )
}