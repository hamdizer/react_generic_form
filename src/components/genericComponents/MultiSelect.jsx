import { MenuItem } from "@mui/material"

export const MultiSelect=(props)=>{
    return(  
    <Select 
     id={props.id}
     multiple
     value={props.value}
     style={props.style}
    >
        {props.options.map((option,key)=>(
            <MenuItem key={key}>{option}</MenuItem>
        ))}

        </Select>
    )
  }