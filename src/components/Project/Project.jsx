import styles from './Project.module.css';

export default function Project({name, src}){
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>{name}</h1>
                <img src={src} alt="" />
            </div>
        </div>
    );
};