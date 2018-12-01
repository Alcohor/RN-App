// import { promises } from "fs";
// import config from '../config'

const Fetch =(url:string)=>{
    return new Promise(resolve=>{
        fetch(url).then(response => response.json())
            .then((result) => resolve(result))
    })
}

export default Fetch