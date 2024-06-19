import { v4 as uuidv4 } from 'uuid';

const contacts = [{contact:"Phone Number",id:uuidv4()},{contact:"Email",id:uuidv4()},{contact:"GitHub",id:uuidv4()},{contact:"LinkedIn",id:uuidv4()}];


function NameAndContactInputs(){
    const contactsList = contacts.map(contact => {
        return (
            <li key={contact.id}>
                <input type="text" placeholder={contact.contact}/>
            </li>
        )
    })

    return (
        <section>
            <input type='text' placeholder="Your Name"/>
            <ul className='contactList'>{contactsList}</ul>
        </section>
    )
}

function InputSection(){
    return (
        <>
            <NameAndContactInputs/>
        </>
    )
}

export default InputSection;