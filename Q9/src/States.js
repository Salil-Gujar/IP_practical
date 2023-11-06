import { useState } from "react"
export default function States(){
    const[color,setColor]=useState("red");
    const handleClick=()=>{
        color==="red"?setColor("blue"):setColor("red")
    }
    return(
        <div>
            <h1>This is my favorite color : {color}</h1>
            <button onClick={handleClick}>Change</button>
        </div>
    )
}