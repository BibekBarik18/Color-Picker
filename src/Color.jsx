import { useState } from "react"

function Color(){
    const [color,setColor]=useState("#FFFFFF")
    const handleColor=(e)=>{
        setColor(e.target.value)
    }

    return(
        <div className="container">
            <h1>Color Picker</h1>
            <div className="display" style={{backgroundColor:color}}>
                <p>Selected color: {color}</p>
            </div>
            <label>Select a color:</label>
            <input type="color" value={color} onChange={handleColor}></input>
        </div>
    );
}

export default Color