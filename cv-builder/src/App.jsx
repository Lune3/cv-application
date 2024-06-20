import { useState } from "react";
import { NameAndContactInputs} from "./components/inputs";

function UpdateName({name}){
    return (
        <h1>{name}</h1>
    )
}

function Resume(){
    return (
        <div>
            <UpdateName></UpdateName>
        </div>
    )
}

export default function App(){
    const [currName,setName] = useState("Jake Resume");
    function handleName(e){
        setName(e.target.value);
    }

    return(
        <>
            <div>
                <NameAndContactInputs query={currName} onChange={handleName}/>
            </div>
            <div>
                <UpdateName name={currName}/>
            </div>
        </>
    )
}