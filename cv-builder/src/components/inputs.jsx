import { contacts } from './data';

function NameAndContactInputs({ query, onChange, userContact }) {
    const contactsList = contacts.map(contact => {
        return (
            <li key={contact.id}>
                <input type="text" placeholder={contact.contact} required />
            </li>
        )
    })
    return (
        <section>
            <h2>Name and contact info</h2>
            <input type='text' placeholder="Your Name" value={query} onChange={onChange} maxLength={50} />
            <form onSubmit={userContact}>
                <ul className='contactList'>{contactsList}</ul>
                <button type='submit'>Update information</button>
            </form>
        </section>
    )
}

function Education({ handleEducation }) {
    return (
        <section className='educationInput'>
            <h2>Education</h2>
            <form onSubmit={handleEducation}>
                <input type="text" placeholder='Institute Name' required />
                <input type="text" placeholder='Major' required />
                <input type="text" placeholder='place' required />
                <label htmlFor="to">To</label>
                <input type="date" id='to' required />
                <label htmlFor="from">From</label>
                <input type="date" id='from' required />
                <button type='submit'>Add Education</button>
            </form>
        </section>
    )
}

function Experience() {
    return (
        <section className='experienceInput'>
            <h2>Experience</h2>
            <input type="text" placeholder='Job Title' />
            <input type="text" placeholder='Company or Institute name' />
            <input type="text" placeholder='place' />
            <label htmlFor="to">To</label>
            <input type="date" id='to' />
            <label htmlFor="from">From</label>
            <input type="date" id='from' />
            <div>
                <input type="text" placeholder='Job Description' />
                <button>Add Description</button>
            </div>
            <button>Add Experience</button>
        </section>
    )
}

function Projects() {
    return (
        <section className='projectsInput'>
            <h2>Project</h2>
            <input type="text" placeholder='Name of the project' />
            <input type="text" placeholder='technology used' />
            <label htmlFor="to">To</label>
            <input type="date" id='to' />
            <label htmlFor="from">From</label>
            <input type="date" id='from' />
            <div>
                <input type="text" placeholder='project Description' />
                <button>Add project Description</button>
            </div>
            <button>Submit project</button>
        </section>
    )
}

function Skills() {
    return (
        <section className='skillsInput'>
            <h2>Technical Skills</h2>
            <div>
                <label htmlFor="language">Language</label>
                <input type="text" id='language' />
                <button>Add language</button>
            </div>
            <div>
                <label htmlFor="framework">Framework</label>
                <input type="text" id='framework' />
                <button>Add Framework</button>
            </div>
            <div>
                <label htmlFor="developerTool">Developer Tool</label>
                <input type="text" id='developerTool' />
                <button>Add Developer Tool</button>
            </div>
            <div>
                <label htmlFor="libraries">Libraries</label>
                <input type="text" id='libraries' />
                <button>Add Library</button>
            </div>
        </section>
    )
}

export { NameAndContactInputs, Education };