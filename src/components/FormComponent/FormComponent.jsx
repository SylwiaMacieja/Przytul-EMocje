import React from "react";
import {useState} from "react";
import './FormComponent.scss'


const validate = form => {
    if(!form.name) {
        return'Imię jest wymagane'
    } else if (form.name.lenght <= 2) {
        return 'Imie musi mieć więcej niż dwa znaki'
    }
    return null
}

export function FormComponent() {
    const [error, setError] = useState (null);
    const [form, setForm] = useState({
        name: '',
        surname:'',
        phone: '',
        email: '',
        q1: '',
        q2: '',
        q3: ''
    });

    const update = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit =  (event) => {
        event.preventDefault()
        const errorMsg = validate(form)
        if(errorMsg) {

            setError(errorMsg)
            console.log('blad')
            return
        }
        console.log('submitted',form)
    }

    return (
        <div className="Form__container">
                {error && (<div>{error}</div>)}
            {/*<div className="Form__info">Conajmniej 24h przed sesją wypełnij formularz. Jest to niezbędne do odbycia sesji. </div>*/}

            <form className='Form' onSubmit={handleSubmit}>

                <div className="Form_contact">
                <label className='Form__label__contact'>Imię</label>
                <input className='Form__input' type='text'  name='name' onChange={update}/>

                <label className='Form__label__contact'>Nazwisko</label>
                <input className='Form__input' type='text'  name='surname' onChange={update}/>

                <label className='Form__label__contact'>Telefon</label>
                <input className='Form__input' type='text' placeholder=' xxx-xxx-xxx' name='phone' onChange={update}/>

                <label className='Form__label__contact'>Email</label>
                <input className='Form__input' type='text'  onChange={update}/>
                </div>

                <div className="Form__questions">

                <input className='Form__input__q' type='text' placeholder='Wpisz odpowiedź' name='q1' onChange={update}/>
                    <label className='Form__label__questions'>Pytanie 1</label>

                <input className='Form__input__q' type='text' placeholder='Wpisz odpowiedź' name='q2' onChange={update}/>
                    <label className='Form__label__questions'>Pytanie 2</label>


                <input className='Form__input__q' type='text' placeholder='Wpisz odpowiedź' name='q3' onChange={update}/>
                    <label className='Form__label__questions'>Pytanie 3</label>
                </div>

                <button className="Form__button" type='submit'>WYŚLIJ</button>

            </form>



        </div>
    )
}