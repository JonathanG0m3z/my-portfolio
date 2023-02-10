import styles from './Project.module.css';
import {BsFileCodeFill} from 'react-icons/bs';
import {SiNetlify} from 'react-icons/si';

export default function Project({name, src, code, deploy}){
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>{name}</h1>
                <img src={src} alt="" />
                <div className={styles.divIcons}>
                    <a href={code} target="_blank">
                        <BsFileCodeFill className={styles.icon} />
                    </a>
                    <a href={deploy} target="_blank">
                        <SiNetlify className={styles.icon} />
                    </a>
                </div>
            </div>
        </div>
    );
};