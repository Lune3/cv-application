import { useState } from 'react';
import { contacts } from './data';
import { v4 as uuidv4 } from 'uuid';

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

function Experience({handleExperience}) {

    const [descriptionInput,setDescription] = useState([]);

    function addDescriptionInput(){
        const newDescription = [...descriptionInput,<input key={uuidv4()} type='text' placeholder='Job Description' required/>];
        setDescription(newDescription);
    }

    function clearJobInput(){
        setDescription([]);
    }

    return (
        <section className='experienceInput'>
            <h2>Experience</h2>
            <form onSubmit={handleExperience}>
                <input type="text" placeholder='Job Title' required/>
                <input type="text" placeholder='Company or Institute name' required/>
                <input type="text" placeholder='place' required/>
                <label htmlFor="to">To</label>
                <input type="date" id='to' required/>
                <label htmlFor="from">From</label>
                <input type="date" id='from' required/>
                <div>
                    <input type="text" placeholder='Job Description' required/>
                    {descriptionInput}
                    <button type='button' onClick={addDescriptionInput}>Add Description</button>
                    <button type='button' onClick={clearJobInput}>Remove Description?</button>
                </div>
                <button type='submit'>Add Experience</button>
            </form>
        </section>
    )
}

function Projects({handleProject}) {
    const [projectDescription,setProjectDescription] = useState([]) ;

    function addProjectDescription(){
        const newProjectDescription = [...projectDescription,<input key={uuidv4()} type='text' placeholder='Project Description' required/>]
        setProjectDescription(newProjectDescription); 
    }

    function removeDescription(){
        setProjectDescription([]);
    }

    return (
        <section className='projectsInput'>
            <h2>Project</h2>
            <form onSubmit={handleProject}>
                <input type="text" placeholder='Name of the project' required/>
                <input type="text" placeholder='technology used' required/>
                <label htmlFor="to">To</label>
                <input type="date" id='to' required/>
                <label htmlFor="from">From</label>
                <input type="date" id='from' required/>
                <div>
                    <input type="text" placeholder='project Description' required/>
                    {projectDescription}
                    <button type='button' onClick={addProjectDescription}>Add project Description</button>
                    <button type='button' onClick={removeDescription}>Remove Description</button>
                </div>
                <button type='submit'>Submit project</button>
            </form>
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

export { NameAndContactInputs,Education ,Experience,Projects};