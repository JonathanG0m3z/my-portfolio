import styles from './Projects.module.css';
import Project from '../Project/Project';
import dogs from '../../img/dog.png';

export default function Projects({language}){
    return(
        <div className={styles.container}>
            <h1>{language==='EN'?'Projects':'Proyectos'}</h1>
            <Project name="PI Dogs" src={dogs} />
        </div>
    );
};