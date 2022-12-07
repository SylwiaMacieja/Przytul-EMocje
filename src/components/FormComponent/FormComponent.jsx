import React from "react";
import {useState} from "react";
import './FormComponent.scss'


const validate = form => {

    if(!form.name) {
        return'Imię jest wymagane'
    } else if (form.name.length <= 2) {
        return 'Imie musi mieć więcej niż dwa znaki'
    }
    if(!form.surname) {
        return'Nazwisko jest wymagane'
    } else if (form.surname.length <= 2) {
        return 'Nazwisko musi mieć więcej niż dwa znaki'
    }
    if(!form.phone) {
        return 'Telefon jest wymagany'
    }  else if (form.phone.length <= 8) {
        return 'Telefon musi mieć 9 znaków'
    }  else if (form.phone.length > 9) {
        return 'Telefon musi mieć 9 znaków'
    }
    // if(!form.email) {
    //     return'Email jest wymagany'
    // } else if (!form.email.includes('@')) {
    //     return 'Zły format email'
    // }
    if(!form.q1) {
        return 'Odpowiedź na pytanie 1 jest wymagana'
    }
    if(!form.q2) {
        return 'Odpowiedź na pytanie 2 jest wymagana'
    }
    if(!form.q3) {
        return 'Odpowiedź na pytanie 3 jest wymagana'
    }
    return null
}

export function FormComponent() {
    const [error, setError] = useState (null);
    const [form, setForm] = useState({
        name: '',
        surname:'',
        phone: '',
        // email: '',
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
        event.preventDefault();
        const errorMsg = validate(form);
        if(errorMsg) {

            setError(errorMsg);
            console.log('blad');
            return
        }
        alert(
        `Podano następujące dane:
        Imie i nazwisko: ${form.name} ${form.surname}
        Telefon: ${form.phone}
        Pytanie 1: ${form.q1}
        Pytanie 2: ${form.q2}
        Pytanie 3: ${form.q3}`
        );
        console.log('submitted', form);
        event.target.reset();
    }



        return (
            <div className='Container'>
                <div className='Form__header'>
                    <h1 className='Form__title'>Podróż w głąb siebie. </h1>
                    <p className='Form__description'>"Każdy człowiek doświadcza całego spektrum rozmaitych uczuć. I
                        wszystkie one są ważne. Równie istotna jest świadomość, że do wszystkich uczuć mamy prawo.
                        Czasem emocje, które nam towarzyszą mogą być niełatwe, a czasem sprzeczne, trudne do pogodzenia.
                        Jak nauczyć się je rozpoznawać? Jak, dzięki pracom z emocjami, wzmocnić swój wewnętrzny
                        potencjal i uczynić swoje życie lepszym? Wyrusz w podróż i podążaj ku lepszemu życiu." </p>
                    <p className='Form__info'>Zacznij od wypełnienia poniższego formularza co najmniej 24h przed
                        sesją.</p>
                </div>

                <form className='Form' onSubmit={handleSubmit}>

                    <div className='Form__contact'>
                        <textarea className='Form__input' type='text' name='name' placeholder='Imię' onChange={update}/>

                        <textarea className='Form__input' type='text' name='surname' placeholder='Nazwisko'
                                  onChange={update}/>
                        {/*<label className='Form__label'>Nazwisko</label>*/}

                        <textarea className='Form__input' type='text' name='phone' placeholder='Telefon: xxx xxx xxx'
                                  onChange={update}/>
                        {/*<label className='Form__label'>Email</label>*/}

                        <textarea className='Form__input__q' type='text' placeholder='Pytanie 1' name='q1'
                                  onChange={update}/>


                        <textarea className='Form__input__q' type='text' placeholder='Pytanie 2' name='q2'
                                  onChange={update}/>
                        {/*<label className='Form__label'>Pytanie 2</label>*/}

                        <textarea className='Form__input__q' type='text' placeholder='Pytanie 3' name='q3'
                                  onChange={update}/>
                        {/*<label className='Form__label'>Pytanie 3</label>*/}
                    </div>

                    <button  className="Form__button" type='submit'>WYŚLIJ</button>

                </form>
                {error && (<div className='Form__error'>{error}</div>)}
            </div>
        )
    }
