import { Radio } from "@mui/material";

export const Radio=(props)=>{
    return(
        <Radio 
        id={props.id}
        name={props.name}
        checked={props.checked}
        disabled={props.disabled}
        />
    )

}