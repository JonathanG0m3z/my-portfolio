import styles from './Project.module.css';
import {FaGithubSquare} from 'react-icons/fa';
import {SiReact} from 'react-icons/si';

export default function Project({name, src, code, deploy}){
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>{name}</h1>
                <img src={src} alt="" />
                <div className={styles.divIcons}>
                    <a href={code} target="_blank">
                        <FaGithubSquare className={styles.icon} />
                    </a>
                    <a href={deploy} target="_blank">
                        <SiReact className={styles.icon} />
                    </a>
                </div>
            </div>
        </div>
    );
};