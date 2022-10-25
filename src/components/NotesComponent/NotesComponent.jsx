'use strict';
import React, {Component} from 'react';
import './NotesComponent.scss'
import {Note} from "./Note/Note.jsx";
import {NewNote} from "./NewNote/NewNote.jsx";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {EditNote} from './EditNote/EditNote.jsx'


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
            ],
            showEditModal: false,
            editNote: {}
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

    editNote(note) {
        const notes = [...this.state.notes];
        const index = notes.findIndex(item => item.id === note);
        if (index >= 0) {
            notes[index] = note;
            this.setState({notes});
        }
        this.toggleModal();
    }

    toggleModal() {
       this.setState({showEditModal: !this.state.showEditModal});
    }

    editNoteHandler(note) {
        this.toggleModal();
        this.setState({ editNote: note });
    }


        render() {
            return (

                <div className='Notes'>
                    <p className='Notes__header'>Przestrzeń na Twoje notatki</p>

                    <NewNote onAdd={(note) => this.addNote(note) }/>

                    <Modal
                        isOpen={this.state.showEditModal}
                        contentLabel='Edytuj notatkę'>
                        <EditNote
                            title={this.state.editNote.title}
                            description={this.state.editNote.description}
                            id={this.state.editNote.id}
                        onEdit={note => this.editNote(note)}/>
                        <button
                            onClick={() => this.toggleModal()}>Anuluj</button>
                    </Modal>

                    {this.state.notes.map(note => (
                        <Note
                            key={note.id}
                            title={note.title}
                            description={note.description}
                            id={note.id}
                            onEdit={(note) => this.editNoteHandler(note)}
                            onDelete={(id) => this.deleteNote(note.id)}

                        />
                    ))}
                </div>
            );
        }
}


