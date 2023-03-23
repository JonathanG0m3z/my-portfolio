import styles from './Home.module.css';
import me from '../../img/me.png';

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
                <p>{language==='EN'?"Hello there! I'm a full stack web developer and mechatronic engineer from Líbano Tolima. Throughout my career, I have had the opportunity to work in different development groups, in which I learned and contributed as much as possible. I've been programming since I was 14 years old and professionally in web development for a year and a half. If you have any questions, you can contact me through any of the means that I make available to you.":
                                    '¡Hola a todos! Soy un desarrollador web full stack e ingeniero mecatrónico del Líbano Tolima. A lo largo de mi carrera he tenido la oportunidad de trabajar en diferentes grupos de desarrollo, en los cuales aprendí y aporté tanto como me fue posible. Programo desde los 14 años y profesionalmente en el desarrollo web llevo año y medio. Si tienes alguna duda o consulta puedes contactarme por cualquiera de los medios que dejo a tu disposición.'}
                </p>
            </div>  
            </div>
            </div> 
        </div>
        </>
        
    )
};