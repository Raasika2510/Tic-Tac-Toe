import { useState } from "react"

export default function Player({playername, symbol, isActive, onChangeName}){
    const [isEditing, setIsEditing] = useState(false);
    const [updatedPlayerName, setIsSaving] = useState(playername);
    
    function changeStateEdit(){
        setIsEditing((editing) => !editing);
        if(isEditing){
            onChangeName(symbol, playername)
        }
    }

    function changeStateSave(event){
        setIsSaving(event.target.value)
    }
    
    let element = <span className="player-name">{updatedPlayerName}</span>
    let buttoncap = "Edit";
    
    if(isEditing){
        element = (
            <input type="text" required value={updatedPlayerName} onChange={changeStateSave}/>
            
        )
        buttoncap = "Save"
    }
    

    return(
        <li className= {isActive ? 'active':undefined}>
            <span className="player-info">
            {element}
            <span className = "player-symbol">{symbol}</span>
            </span>
            <button onClick={changeStateEdit}>{buttoncap}</button>
            
        </li>
    )
}