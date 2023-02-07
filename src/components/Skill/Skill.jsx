import styles from './Skill.module.css';

export default function Skill({name, img}){
    return(
        <div className={styles.container}>
            <img src={img} alt="" />
            <label htmlFor="">{name}</label>
        </div>
    )
};