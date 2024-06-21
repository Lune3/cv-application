import { useState } from "react";
import { NameAndContactInputs } from "./components/inputs";
import { userInformation } from "./components/data";


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


export default function App(){
    const [currName,setName] = useState("Jake Resume");
    function handleName(e){
        setName(e.target.value);
    }
    const [userInfo,setInfo] = useState([{text:"123-456-789",id:0},{text:"jake@gmail.com",id:1},{text:"linkedin.com/in/jake",id:2},{text:"github.com/Jake",id:3}]);
    function handleInfo(e){
        e.preventDefault();
        const newContact = userInformation.map((contact,index) => {
           return {text:e.target[index].value,id:contact.id}
        })
        eraseInput(e);
        setInfo(newContact);

    }

    return(
        <>
            <section className="inputSection">
                <NameAndContactInputs query={currName} onChange={handleName} userContact={handleInfo}/>
            </section>
            <section className="resumeSection">
                <UpdateName name={currName}/>
                <UpdateInfo userInfo={userInfo}/> 
            </section>
        </>
    )
}