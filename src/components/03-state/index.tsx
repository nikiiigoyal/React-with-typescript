// ts need to know what type of data is getting stored in a state

import { useState } from "react";

type Link = {
    id: number;
    url:string;
    text: string;
}

const navLinks:Link[] = [
    {
    id: 1,
    url: 'https://reactjs.org',
    text: 'react docs',
  },
  {
    id: 2,
    url: 'https://reactrouter.com',
    text: 'react router docs',
  },
  {
    id: 3,
    url: 'https://reacttraining.com',
    // remove text property to see the error
    text: 'react training',
  },
]
function State () {
    const [text,setText] = useState('shakeAndBake');
    const [number,setNumber] = useState(1)
    // empty array needs type
    const [list,setList] = useState<string[]>([]);
    // objects
    const [links, setLinks] = useState<Link[]>(navLinks) 
    return (
        <div>
            <h2>3. state</h2>
            <button onClick={() => {
                setText('i m a string')
                setNumber(4)
                setList(['hello','world'])
                setLinks([...links,{id:4, url:'hello',text:'hello'}])
            }}>CLick ME</button>
            
        </div>
    )
}
export default State;