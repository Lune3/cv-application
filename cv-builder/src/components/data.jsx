import { v4 as uuidv4 } from 'uuid';

const contacts = [{contact:"Phone Number",id:uuidv4()},{contact:"Email",id:uuidv4()},{contact:"GitHub",id:uuidv4()},{contact:"LinkedIn",id:uuidv4()}];

const userNameInformation = [{text:"123-456-789",id:uuidv4()},{text:"jake@gmail.com",id:uuidv4()},{text:"linkedin.com/in/jake",id:uuidv4()},{text:"github.com/Jake",id:uuidv4()}];

export {contacts,userNameInformation};