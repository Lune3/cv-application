import {contacts} from './data';

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

function Education(){
    
    return (
        <div>
            <input type="text" placeholder='Education'/>
            <input type="text" placeholder='Major'/>
            <input type="text" placeholder='place'/>
            <label htmlFor="to">To</label>
            <input type="date" id='to'/>
            <label htmlFor="from">From</label>
            <input type="date" id='from'/>
        </div>
    )
}

function InputSection(){
    return (
        <>
            <NameAndContactInputs/>
            <Education/>
        </>
    )
}

export default InputSection;