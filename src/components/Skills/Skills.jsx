import Skill from '../Skill/Skill';
import styles from './Skills.module.css';
import HTML from '../../img/html.png';
import CSS from '../../img/css.png';
import Javascript from '../../img/javascript.png';
import React from '../../img/react.png';
import Redux from '../../img/redux.png';
import Express from '../../img/express.png';
import Postgres from '../../img/postgres.png';
import Git from '../../img/git.png';
import MySql from '../../img/mysql.png';
import PHP from '../../img/php.png';
import Node from '../../img/node.png';
import Sequelize from '../../img/sequelize.png';

export default function Skills({language}){
    const list = ['HTML', 'CSS', 'Javascript', 'React', 'Redux', 'Express', 'Postgres', 'Git', 'MySql','PHP', 'Node', 'Sequelize'];
    const skills ={HTML, CSS, Javascript, React, Redux, Express, Postgres, Git, MySql, PHP, Node, Sequelize}
    return(
        <div className={styles.container}>
            <a name="skills"></a>
            <div>
                <h1>{language==='EN'?'Skills':'Habilidades'}</h1>
            </div>
            <div className={styles.container2}>
                {list.map(skill=><Skill name={skill} img={skills[skill]}/>)}
            </div>
        </div>
    )
};