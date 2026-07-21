import { isEmail } from "./isEmail";

export function maskIdentifier(value:string){
 if(isEmail(value)){
    const [name , domain] = value.split("@");
    return `${name.slice(0,2)}***@${domain}`;
 }
 return `${value.slice(0,4)}****${value.slice(-3)}}`;
}