import { Checkbox } from "@mui/material"
export const Checkbox=(props)=>{
    return(
        <Checkbox 
        name={props.name}
        id={props.id}
        checked={props.checked}
        style={props.style}
        />
    
    )
}