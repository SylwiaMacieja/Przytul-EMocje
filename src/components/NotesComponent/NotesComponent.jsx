'use strict';
import React, {Component} from 'react';
import './NotesComponent.scss'
import {Note} from "./Note/Note.jsx";
import {NewNote} from "./NewNote/NewNote.jsx";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';




export class  NotesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: '1',
                    title: 'Radość',
                    description: 'Zastanów się, jakie rzeczy, osoby, myśli czy czynności sprawiają ci radość i dlaczego. Zarezerwuj sobie każdego dnia czas na małe przyjemności i bądź bardzo uważny, by nie zmarnować dużych przyjemności. Żeby sobie na nie także pozwalać, bo często z tym mamy największy problem - że duża radość to nie dla mnie.'
                },
                {
                    id: '2',
                    title: 'Ciekawość',
                    description: 'Zastanów się, co wzbudza twoją ciekawość. Jakie dziedziny sztuki lub nauki? A może elementy życia codziennego? Zwykle interesujesz się czymś na chwilę i zaraz przerzucasz na coś nowego? A może lubisz zgłębiać jeden temat - zarówno teoretycznie, jak i praktycznie.',
                }
            ]
        }
    }

    deleteNote(id) {
        const notes = [...this.state.notes].filter(note => note.id !== id);
        this.setState({notes});
    }

    addNote(note) {
        const notes = [...this.state.notes];
        notes.push(note);
        this.setState({notes});
    }

        render() {
            return (

                <div className='Notes'>
                    <p className='Notes__header'>Przestrzeń na Twoje notatki</p>

                    <NewNote onAdd={(note) => this.addNote(note) }/>

                    {this.state.notes.map(note => (
                        <Note
                            key={note.id}
                            title={note.title}
                            description={note.description}
                            id={note.id}
                            onDelete={(id) => this.deleteNote(note.id)}
                        />
                    ))}
                </div>
            );
        }
}


