import { useState } from "react";
import { NameAndContactInputs ,Education,Experience,Projects, Skills} from "./components/inputs";
import { userInformation} from "./components/data";
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import { format } from "date-fns";

function eraseInput(e){
    for(let i = 0;i < e.target.length;i++){
        e.target[i].value = "";
    }
}

function UpdateName({name}){
    return (
        <h1>{name}</h1>
    )
}

function UpdateInfo({userInfo}){
    const infoList = userInfo.map(userContacts =>{
        return(
            <li key={userContacts.id}><a href="">{userContacts.text}</a> |</li>
        )
    })
    return (
        <ul>
            {infoList}
        </ul>
    )
}

function UpdateUserEducationAndExperience({ userEducation, removeEducation }) {
    let expList = [];
    const eduList = userEducation.map(edu => {  
            const userEdu = Object.entries(edu).map(([keyName, value]) => {
                if (keyName !== 'id' && keyName !== 'description') {
                    return (
                        <li key={keyName}>{value}</li>
                    )
                }
                if(keyName === 'description'){
                    expList = value.map((exp,index) => {
                        return (
                            <li key={index}>{exp}</li>
                        )
                    })
                }

            })
            return (
                <ul key={edu.id}>
                    <div className={edu.hasOwnProperty("description")? "userExperience" :"userEducation"}>
                        <div className="heading"> 
                            <div className={edu.hasOwnProperty("description")? "experienceNameAndMajor" :"nameAndMajor"}>
                                {[userEdu.slice(0,2)]}
                            </div>
                            <div className={edu.hasOwnProperty("description")? "experiencePlaceAndDate" :"placeAndDate"}>
                                {[userEdu.slice(2,5)]}

                            </div>
                        </div>
                        <div>
                            <ul className="expList">
                            {expList}
                            </ul>
                        </div>
                    </div>
                    <button onClick={() => removeEducation(edu.id)}>Remove</button>
                </ul>
            )
        
    })
    return (
        <div>
            {eduList}
        </div>
    );
}

function UpdateExp({userExperience,removeExperience}){
    return (
        <UpdateUserEducationAndExperience userEducation={userExperience} removeEducation={removeExperience}></UpdateUserEducationAndExperience>
    )
}

function UpdateProject({userProject,removeProject}){
    let projectDescriptionList = [];
    const projectList = userProject.map(project => {
        const descriptionList = Object.entries(project).map(([key,value]) => {
            if(key !== 'id' && key !== 'description'){
                return (
                    <li key={key}>{value}</li>
                )
            }
            else if(key === 'description'){
                projectDescriptionList = value.map((des,index) => {
                    return (<li key={index}>{des}</li>)
                }) 
            }
        })
        return(
            <ul key={project.id}>
                <div>
                    <div className="projectHeading">
                        <div className="projectNameAndSkills">
                            {descriptionList.slice(0,2)}
                        </div>
                        <div className="projectDate">
                            {descriptionList.slice(2,4)}
                        </div>
                    </div>
                    <div className="projectList">
                        <ul className="projectDescription">
                            {projectDescriptionList}
                        </ul>
                    </div>
                </div>
            <button type="button" onClick={() => removeProject(project.id)}>Remove</button>
            </ul>
        )
    })
    return(
        <div>
            {projectList}
        </div>
    )
}

function UpdateSkills({language,framework,tool,libraries}){

    return(
        <div>
            <h3>Languages: <span>{language}</span></h3>
            <h3>Framework: <span>{framework}</span></h3>
            <h3>Tool: <span>{tool}</span></h3>
            <h3>Libraries: <span>{libraries}</span></h3>
        </div>
    )
}



export default function App(){
    const [currName,setName] = useState("Jake Resume");
    const [userInfo,setInfo] = useState([{text:"123-456-789",id:0},{text:"jake@gmail.com",id:1},{text:"linkedin.com/in/jake",id:2},{text:"github.com/Jake",id:3}]);
    const [userEducation,setEducation] = useState([]);
    const [userExperience,setExperience] = useState([]);
    const [userProject,setProject] = useState([]);
    const [language,setLanguage] = useState("");
    const [framework,setFrameWork] = useState("");
    const [tools,setTools] = useState("");
    const [libraries,setLibraries] = useState("");

    function handleName(e){
        setName(e.target.value);
    }

    function handleInfo(e){
        e.preventDefault();
        const newContact = userInformation.map((contact,index) => {
           return {text:e.target[index].value,id:contact.id}
        })
        eraseInput(e);
        setInfo(newContact);
        
    }

    function handleEducation(e){
        e.preventDefault();
        const newEducation = [...userEducation,{instituteName:e.target[0].value,
                                                major:e.target[1].value,
                                                place:e.target[2].value,
                                                date:`${format(e.target[3].value,"MMM'.'YYY")} - ${format(e.target[4].value,"MMM'.'YYY")}`,
                                                id:uuidv4()}];
        setEducation(newEducation);
        eraseInput(e);
    }

    function removeEducation(e){
        setEducation(userEducation.filter(edu =>{
            return edu.id !== e;
        }))
    }

    function handleExp(e){
        e.preventDefault();
        const newExp = [...userExperience,{title:e.target[0].value,
            name:e.target[1].value,
            place:e.target[2].value,
            date:`${format(e.target[3].value,"MMM'.'YYY")} - ${format(e.target[4].value,"MMM'.'YYY")}`,
            description:[],
            id:uuidv4()}];

        for(let i = 5;i < e.target.length - 3;i++){
            newExp[newExp.length - 1].description.push(e.target[i].value);
        }

        setExperience(newExp);
        eraseInput(e);
    }

    function removeExperience(e){
        setExperience(userExperience.filter(edu =>{
            return edu.id !== e;
        }))
    }

    function handleProject(e){
        e.preventDefault();
        const newProject = [...userProject,{name:`${e.target[0].value} |`,
                                            tech:e.target[1].value,
                                            to:`${format(e.target[2].value,"MMM'.'YYY")} -`,
                                            from:`${format(e.target[3].value,"MMM'.'YYY")}`,
                                            description:[],
                                            id:uuidv4()}];
        for(let i = 4;i < e.target.length - 3;i++){
            newProject[newProject.length - 1].description.push(e.target[i].value);
        }
        setProject(newProject);
        eraseInput(e);
    }

    function removeProject(id){
        setProject(userProject.filter(project => project.id !== id))
    }

    function handleSkills(e){
        e.preventDefault();
        switch(e.target.id){
            case "languageForm":
                setLanguage(language+`${e.target[0].value},`);
                break;
            case "frameWorkForm":
                setFrameWork(framework+`${e.target[0].value},`);
                break;
            case "toolsForm":
                setTools(tools+`${e.target[0].value},`);
                break;
            case "libraryForm":
                setLibraries(libraries+`${e.target[0].value},`);
                break;
        }
        eraseInput(e);
    }

    return(
        <>
            <section className="inputSection">
                <NameAndContactInputs query={currName} onChange={handleName} userContact={handleInfo}/>
                <Education handleEducation={handleEducation}></Education>
                <Experience handleExperience={handleExp}></Experience>
                <Projects handleProject={handleProject}></Projects>
                <Skills handleSkills={handleSkills}></Skills>
            </section>
            <section className="resumeSection">
                <header>
                    <UpdateName name={currName}/>
                    <UpdateInfo userInfo={userInfo}/> 
                </header>
                <div className="education">
                    <h1>Education</h1>
                    <hr />
                    <UpdateUserEducationAndExperience userEducation={userEducation} removeEducation={removeEducation}/>
                </div>
                <div className="experience">
                    <h1>Experience</h1>
                    <hr />
                    <UpdateExp userExperience={userExperience} removeExperience={removeExperience}/>
                </div>
                <div className="project">
                    <h1>Project</h1>
                    <hr />
                    <UpdateProject userProject={userProject} removeProject={removeProject}></UpdateProject>
                </div>
                <div className="skills">
                    <h1>Skills</h1>
                    <hr />
                    <UpdateSkills language={language} framework={framework} tool={tools} libraries={libraries}></UpdateSkills>
                </div>
            </section>
        </>
    )
}