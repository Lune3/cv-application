import { v4 as uuidv4 } from 'uuid';

const contacts = [{contact:"Phone Number",id:0},{contact:"Email",id:1},{contact:"GitHub",id:2},{contact:"LinkedIn",id:3}];

const userInformation = [{text:"123-456-789",id:0},{text:"jake@gmail.com",id:1},{text:"linkedin.com/in/jake",id:2},{text:"github.com/Jake",id:3}];

const education = [{instituteName:"Texas University",major:"Bachelor in Arts",place:"GeorgeTown,TX",to:"Aug. 2018",from:"Sept. 2020",id:uuidv4()}];

export {contacts,userInformation,education};