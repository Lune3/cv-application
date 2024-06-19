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
            <h2>Name and contact info</h2>
            <input type='text' placeholder="Your Name"/>
            <ul className='contactList'>{contactsList}</ul>
            <button>Update information</button>
        </section>
    )
}

function Education(){
    
    return (
        <div className='education'>
            <h2>Education</h2>
            <input type="text" placeholder='Education'/>
            <input type="text" placeholder='Major'/>
            <input type="text" placeholder='place'/>
            <label htmlFor="to">To</label>
            <input type="date" id='to'/>
            <label htmlFor="from">From</label>
            <input type="date" id='from'/>
            <button>Add Education</button>
        </div>
    )
}

function Experience(){
    return (
        <section className='experience'>
            <h2>Experience</h2>
            <input type="text" placeholder='Job Title'/>
            <input type="text" placeholder='Company or Institute name'/>
            <input type="text" placeholder='place'/>
            <label htmlFor="to">To</label>
            <input type="date" id='to'/>
            <label htmlFor="from">From</label>
            <input type="date" id='from'/>
            <div>
                <input type="text" placeholder='Job Description'/>
                <button>Add Description</button>
            </div>
            <button>Add Experience</button>
        </section>
    )
}

function Projects(){
    return (
        <section>
            <h2>Project</h2>
            <input type="text" placeholder='Name of the project'/>
            <input type="text" placeholder='technology used' />
            <label htmlFor="to">To</label>
            <input type="date" id='to'/>
            <label htmlFor="from">From</label>
            <input type="date" id='from'/>
            <div>
                <input type="text" placeholder='project Description' />
                <button>Add project Description</button>
            </div>
            <button>Submit project</button>
        </section>
    )
}

function InputSection(){
    return (
        <>
            <NameAndContactInputs/>
            <Education/>
            <Experience/>
            <Projects/>
        </>
    )
}

export {InputSection};