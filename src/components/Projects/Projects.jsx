import styles from './Projects.module.css';
import Project from '../Project/Project';
import dogs from '../../img/dog.png';
import rym from '../../img/rickandmorty.png';
import php from '../../img/php.png';

export default function Projects({language}){
    const projects = [{name: "PI Dogs", code:"https://github.com/JonathanG0m3z/PI-Dogs", deploy:"https://dogs-jongom.netlify.app", src: dogs},  
                    {name: language==='EN'?"Rick and morty":"Rick y morty", code:"https://github.com/JonathanG0m3z/rick_and_morty_App", deploy:"https://rickandmorty-jongom.netlify.app", src: rym},
                    {name: "MyCliente", code:"https://github.com/JonathanG0m3z/myclientePublic", deploy:"http://mycliente.rf.gd/", src: php}];
    return(
        <>
            <a name="projects"></a>
            <div className={styles.container}>
                <h1 className={styles.tittle}>{language==='EN'?'Projects':'Proyectos'}</h1>
                <div className={styles.container2}>
                      {projects.map(({name,code,deploy,src})=><Project name={name} code={code} deploy={deploy} src={src} />)}
                </div>
            </div>  
        </>
        
    );
};