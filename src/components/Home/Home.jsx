import styles from './Home.module.css';
import me from '../../img/me.jfif';

export default function Home({language}){
    return(
        <>
        <div className={styles.home}>
           <div className={styles.container}>
            <a name='home'></a>
            <div className={styles.divImg}>
                <img src={me} alt="" />
            </div>
            <div className={styles.divName}>
              <h1>Jonathan Gómez</h1>
              <a name='about'></a>  
              <h2>{language==='EN'?'Full stack web developer':'Desarrollador web full stack'}</h2>
              <div className={styles.about}>
                <p>{language==='EN'?'Hello there! I am a web developer and mechatronic engineer from Manizales, Colombia. I currently work as teaching assistant at Henry, where I am in charge of coordinate a group of new students throughout the whole bootcamp experience. I have worked on a few occasions in small web development teams before but I would like to collaborate with many more developers in order to contribute and learn much more from this great world of programming.':
                '¡Hola a todos! Soy un desarrollador web e ingeniero mecatrónico de Manizales, Colombia. Actualmente trabajo como teaching assistant (TA) en Henry, donde me encargo de coordinar un grupo de nuevos estudiantes a travez de todo el bootcamp. He trabajado en varias ocaciones en pequeños equipos de desarrollo pero me gustaría colaborar con más desarrolladores para contribuir y aprender muchísimo más sobre este gran mundo de la programación.'}
                </p>
            </div>  
            </div>
            </div> 
        </div>
        </>
        
    )
};