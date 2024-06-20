import { useState,setName } from "react";

function UpdateName(){

    return (
        <h1>{name}</h1>
    )
}

function Resume(){

    return (
        <div>
            <UpdateName/>
        </div>
    )

}

export {Resume,UpdateName};