import { useState } from 'react';
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
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const filter = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    const handleChanges = (event)=>{
        setForm({
          ...form,
            [event.target.name]: event.target.value
        })
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(form.name === '' || form.email === '' || form.subject === '' || form.message === '') setError(language==='EN'?"Complete the information please":"Complete la información por favor");
        else if(!filter.test(form.email)) setError(language==='EN'?"Please enter a valid email address":"El correo ingresado no es valido");
        else {
            setError('');
            emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, event.target, REACT_APP_PUBLIC_KEY)
            .then(() => {
                setSuccess(true);
            }, (err) => {
                alert(JSON.stringify(err));
            });
        }
    };
    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form} >
                {error.length?<span className={styles.span}>{error}</span>:''}
                <input onChange={handleChanges} value={form.name} type="text" name="name" placeholder={language==='EN'?'Name':'Nombre'}/>
                <input onChange={handleChanges} value={form.email} type="text" name="email" placeholder={language==='EN'?"Email":'Correo electrónico'}/>
                <input onChange={handleChanges} value={form.subject} type="text" name="subject" placeholder={language==='EN'?"Subject":'Asunto'}/>
                <textarea onChange={handleChanges} value={form.message} name="message" placeholder={language==='EN'?"Message":'Mensaje'}></textarea>
                {success?<span className={styles.spanSuccess}>{language==='EN'?'Email sent satisfactorily':'Correo enviado satisfactoriamente'}</span>:''}
                <button className={styles.button} type="submit">{language==='EN'?'Send':'Enviar'}</button>
            </form>
        </div>
    )
};