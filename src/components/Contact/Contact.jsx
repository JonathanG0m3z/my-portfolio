import styles from './Contact.module.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdOutgoingMail } from 'react-icons/md';

export default function Contact({language}){
    return(
        <div className={styles.container}>
            <a name='contact'></a>
            <h1 className={styles.tittle}>{language==='EN'?'Contact':'Contacto'}</h1>
            <div className={styles.contacts}>
                <div className={styles.contact}>
                    <a href="https://www.linkedin.com/in/jonathan-gomez-sanchez-" target="_blank">
                        <BsLinkedin className={styles.icon} />
                        <span>Jonathan Gómez</span>
                    </a>
                </div>
                <div className={styles.contact}>
                    <a href="https://github.com/JonathanG0m3z" target="_blank">
                        <BsGithub className={styles.icon} />
                        <span>JonathanG0m3z</span>
                    </a>
                </div>
                <div className={styles.contact}>
                    <a href="mailto:jg350u@gmail.com" target="_blank">
                        <MdOutgoingMail className={styles.icon} />
                        <span>Jonathan Gómez</span>
                    </a>    
                </div>
            </div>
        </div>
    )
};