import { Select,Checkbox, Card, TextField ,MenuItem, Button,InputLabel} from "@mui/material";
import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageState } from "../../store/FormItemActions";
import { Hooks } from "../../utils/hooks";

export const AddEdit=()=>{
const [typeInput,setTypeInput]=useState("")
const [value,setValue]=useState("")
const [defaultValue,setDefaultValue]=useState("")
const values=useSelector((state)=>state.fieldItemsReducer.currentFieldItem)
const dispatch=useDispatch()
const [options,setOptions]=useState([])
const {onChangeInput,onChangeOptions}=Hooks()
 const handleChangeValueOption=(e)=>{
  onChangeInput(e)
  setValue(e.target.value)
 }
 useEffect(()=>{
   onChangeOptions(options)
 },[options])
 const handleChangeDefaultValueOption=(e)=>{
  setDefaultValue(e.target.value)
 }
    const handleChangeType=(e)=>{
        setTypeInput(e.target.value)
        document.getElementById('id').value=""
        document.getElementById('Name').value=""
        document.getElementById('Value').value=""


        console.log("values",e.target.value)
    }
    return(<>
   <span>Ajouter un Champ</span>     
  <Card>
  <div style={{marginTop:"20px"}}>
  <InputLabel>Type</InputLabel>

  <Select
              fullWidth
              displayEmpty
              onChange={(e)=>{handleChangeType(e);onChangeInput(e)}}
              inputProps={{ 'aria-label': 'Without label' }}
              value={values.type}
              name="type"
            >
              <MenuItem value="">
                Select a type
              </MenuItem>
              <MenuItem value="input">
                TextField
              </MenuItem>
              <MenuItem value={"select"}>Select</MenuItem>
              <MenuItem value={"multiselect"}>MultiSelect</MenuItem>
              <MenuItem value={"checkbox"}>Checkbox</MenuItem>

            </Select>
            </div>
            {options.length>0  && (typeInput==="select"||typeInput==="multiselect") && <div style={{marginTop:"20px"}}>
  <InputLabel>Default Value</InputLabel>

  <Select
              fullWidth
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              value={defaultValue}
              onChange={(e)=>{handleChangeDefaultValueOption(e);onChangeInput(e)}}
              name="defaultValue"
            >
             {options.map((option,key)=>(
              <MenuItem value={option} >{option}</MenuItem>
             ))}

            </Select>
            </div>       
} 
   <div style={{marginTop:"20px"}}>
    <TextField 
    id="id"
    fullWidth
    label="Id"
    onChange={onChangeInput}
    name="id"
    value={values.id}
    />
    </div>
    <div style={{marginTop:"20px"}}>
    <TextField 
    id="Name"
    fullWidth
    label="Name"
    onChange={onChangeInput}
    name="name"
    value={values.name}

    />
    </div>
    <div style={{marginTop:"20px"}}>
    <TextField 
    id="Value"
    fullWidth
    label="Value"
    onChange={onChangeInput}
    name="value"
    value={values.value}

    />
    Disabled
     <Checkbox 
     id="check"
     name="disabled"
     onChange={onChangeInput}

    />
    </div>
   {(typeInput==="select"||typeInput==="multiselect") && <div style={{marginTop:"20px"}}>
    <TextField 
    fullWidth
    id="Option"
    label="Option"
    value={value}
    name="options"
    onChange={handleChangeValueOption}
    onKeyUp={(e)=>{if(e.code==="Enter") {
      setOptions([...options,value])
      setValue("")

      }}}
/>
</div>
}

     {(typeInput==="select"||typeInput==="multiselect") &&options?.map((option,key)=>(
      <ul>
        <li key={key}>{option}</li>
      </ul>
     ))}
<div style={{float:"right"}}>
   <Button onClick={()=>{dispatch(setPageState({   
    fieldItemStateName:"addField",
    fieldItemStateValue:false
   }))
   dispatch(setPageState({   
    fieldItemStateName:"editField",
    fieldItemStateValue:false
   }))
   }}>Cancel</Button>
   <Button onClick={()=>{dispatch({type:"ADD_NEW_FIELD",payload:values})
  dispatch(setPageState({   
    fieldItemStateName:"addField",
    fieldItemStateValue:false
   }))
   dispatch(setPageState({   
    fieldItemStateName:"editField",
    fieldItemStateValue:false
   }))
  }}>Confirm</Button>
</div>
  </Card>
  </>
    )
}