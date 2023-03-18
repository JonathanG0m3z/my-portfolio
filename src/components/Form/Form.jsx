import { useEffect, useState } from 'react';
import styles from './Form.module.css';
import emailjs from '@emailjs/browser';

export default function Form({language}){
    const {REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY} = process.env;
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [success, setSuccess] = useState(false);

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const dictionary = {
        name: [/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{3,}$/, setNameError],
        email: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, setEmailError],
        subject: [/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{3,}$/, setSubjectError],
        message: [/^[A-ZÁÉÍÓÚÑa-záéíóúñ\s\d\-\_\.\,\'\:\;\(\)\[\]\{\}\!\?\¡\¿]{2,}$/, setMessageError]
    };

    const validate = ({name, value})=>{
        const isValid = !dictionary[name][0].test(value);
        dictionary[name][1](isValid);
    }

    const handleChanges = ({target})=>{
        setForm({
          ...form,
            [target.name]: target.value
        });
        validate(target);
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, event.target, REACT_APP_PUBLIC_KEY)
        .then(() => {
            setSuccess(true);
        }, (err) => {
            alert(JSON.stringify(err));
        });
    };

    useEffect(()=>{},[form]);

    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form} >
                <input autoComplete='off' className={nameError?styles.error:styles.valid} onChange={handleChanges} value={form.name} type="text" name="name" placeholder={language==='EN'?'Name':'Nombre'}/>
                {nameError?<span className={styles.span}>{language==='EN'?'The first letter must be capital and have more than 3 characters':
                                                                            'La primer letra debe ser mayúscula y tener más de tres caracteres'}</span>:''}
                <input className={emailError?styles.error:styles.valid} onChange={handleChanges} value={form.email} type="text" name="email" placeholder={language==='EN'?"Email":'Correo electrónico'}/>
                {emailError?<span className={styles.span}>{language==='EN'?'Invalid email':'Correo electrónico inválido'}</span>:''}
                <input autoComplete='off' className={subjectError?styles.error:styles.valid} onChange={handleChanges} value={form.subject} type="text" name="subject" placeholder={language==='EN'?"Subject":'Asunto'}/>
                {subjectError?<span className={styles.span}>{language==='EN'?'The first letter must be capital and have more than 3 characters':
                                                                            'La primer letra debe ser mayúscula y tener más de 3 caracteres'}</span>:''}
                <textarea className={messageError?styles.error:styles.valid} onChange={handleChanges} value={form.message} name="message" placeholder={language==='EN'?"Message":'Mensaje'}></textarea>
                {messageError?<span className={styles.span}>{language==='EN'?'The first letter must be capital and have more than 5 characters':
                                                                            'La primer letra debe ser mayúscula y tener más de 5 caracteres'}</span>:''}
                {success?<span className={styles.spanSuccess}>{language==='EN'?'Email sent successfully':'Correo enviado satisfactoriamente'}</span>:''}
                <button className={styles.button} type="submit"
                    disabled={form.name === '' || form.email === '' || form.subject === '' || form.message === '' || nameError || emailError || subjectError || messageError}
                >{language==='EN'?'Send':'Enviar'}</button>
            </form>
        </div>
    )
};