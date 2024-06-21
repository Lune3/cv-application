import { useState } from "react";
import { NameAndContactInputs ,Education} from "./components/inputs";
import { userInformation ,education} from "./components/data";
import { v4 as uuidv4 } from 'uuid';


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
            <li key={userContacts.id}>{userContacts.text}</li>
        )
    })
    return (
        <ul>
            {infoList}
        </ul>
    )
}

function UpdateEducation({userEducation,removeEducation}){
    const eduList = userEducation.map(edu => {
        const userEdu = Object.entries(edu).map(([keyName, value]) =>{
            if(keyName !== 'id'){
                return (
                    <li key={keyName}>{value}</li>
                )
            }
        })
        return (
            <ul id={edu.id} key={edu.id}>
                {userEdu}
                <button key={edu.id} onClick={removeEducation}>Remove</button>
            </ul>
        )
    }) 
    return (
        <>
            {eduList}
        </>
    );
}


export default function App(){
    const [currName,setName] = useState("Jake Resume");
    const [userInfo,setInfo] = useState([{text:"123-456-789",id:0},{text:"jake@gmail.com",id:1},{text:"linkedin.com/in/jake",id:2},{text:"github.com/Jake",id:3}]);

    const [userEducation,setEducation] = useState([]);

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
        const newEducation = [...userEducation,{instituteName:e.target[0].value,major:e.target[1].value,place:e.target[2].value,to:e.target[3].value,from:e.target[4].value,id:uuidv4()}];
        setEducation(newEducation);
        eraseInput(e);
    }

    function removeEducation(e){
        let id = e.target.parentNode.id;
        setEducation(userEducation.filter(edu =>{
            return edu.id !== id;
        }))
    }

    return(
        <>
            <section className="inputSection">
                <NameAndContactInputs query={currName} onChange={handleName} userContact={handleInfo}/>
                <Education handleEducation={handleEducation}></Education>
            </section>
            <section className="resumeSection">
                <header>
                    <UpdateName name={currName}/>
                    <UpdateInfo userInfo={userInfo}/> 
                </header>
                <div className="education">
                    <UpdateEducation userEducation={userEducation} removeEducation={removeEducation}/>
                </div>
            </section>
        </>
    )
}