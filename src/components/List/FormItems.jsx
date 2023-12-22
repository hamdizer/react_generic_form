import {  Input, Select, MenuItem, Grid, Button, } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageState } from "../../store/FormItemActions";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Hooks } from "../../utils/hooks";
export const FieldItemsList = () => {
  const [jsonData, setJsonData] = useState(null);
  const listfields = useSelector((state) => state.fieldItemsReducer.allfieldItems)
  const pageState=useSelector((state) => state.fieldItemsReducer.pageState)
  const [valueSelect, setValueSelect] = useState("")
  const [valueSelectMultiple, setValueSelectMultiple] = useState([])
  const [selectedFieldItem,setSelectedFieldItem]=useState();
  const values=useSelector((state)=>state.fieldItemsReducer.currentFieldItem)
  const dispatch=useDispatch()
  const handleChangeValue = (e) => {
    setValueSelect(e.target.value)
  }
  const {handleEditFieldItem,onResetValues,exportForm}=Hooks()
  const handleChangeValueMultiple = (e) => {
    setValueSelectMultiple(e.target.value)
  }
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      const parsedData = JSON.parse(content);
      setJsonData(parsedData);
    };
    reader.readAsText(file);
  };
  useEffect(()=>{
    console.log("jsonData",jsonData)
    jsonData&& dispatch({type:"SET_ALL_FIELDS",payload:jsonData})

  },[jsonData])
  useEffect(()=>{
   setSelectedFieldItem(listfields.filter((item)=>item.id==values.id)[0])
   dispatch({type:"SET_SELECTED_ITEM",payload:selectedFieldItem})
   console.log("selectedItem",selectedFieldItem)
  },[selectedFieldItem])
  const propsInput = (field) => {
    switch (field.type) {
      case "input":
        return (
          <Input
            fullWidth
            type={pageState.editField ?selectedFieldItem?.type:field.type}
            id={pageState.editField ?selectedFieldItem?.id:field.id}
            value={pageState.editField ?selectedFieldItem?.value:field.value}
            disabled={pageState.editField ?selectedFieldItem?.disabled:field.disabled}
          />)
      case "checkbox":
        return (<Input
 fullWidth
            type={pageState.editField ?selectedFieldItem?.type:field.type}
            id={pageState.editField ?selectedFieldItem?.id:field.id}
            value={pageState.editField ?selectedFieldItem?.value:field.value}
            checked={pageState.editField ?selectedFieldItem?.checked:field.checked}
        />)

      case "select":
        return (
          <>
            <Select
              fullWidth
              id={field.id}
              displayEmpty
              value={valueSelect}
              onChange={handleChangeValue}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                None
              </MenuItem>
              {field.options.map((option, key) => (<MenuItem value={key}>{option}</MenuItem>))}
            </Select>
          </>
      
        )
      case "multiselect":
        return (
          <>
            <Select
              fullWidth
              id={field.id}
              displayEmpty
              multiple
              value={valueSelectMultiple}
              onChange={handleChangeValueMultiple}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={[]}>
                None
              </MenuItem>
              {field.options.map((option, key) => (<MenuItem value={key}>{option}</MenuItem>))}
            </Select>
          </>
        )
        default :
        return(<></>)  
    }
  }


return (
  <>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {listfields.map((field, key) => (
      <Grid item xs={6}>
        {propsInput(field)}
        <Button onClick={()=>
        {dispatch(setPageState({   
          fieldItemStateName:"editField",
          fieldItemStateValue:true
         }));
         handleEditFieldItem(selectedFieldItem)
        }
        }>
        <EditIcon />
        </Button>
        <Button onClick={()=>
        {dispatch({type:"DELETE_FIELD",payload:values.id})
        }
        }>
        <DeleteIcon />
        </Button>
      </Grid>
    ))}
  </Grid>
  <Button style={{"float":"right"}} onClick={()=>{dispatch(setPageState({   
    fieldItemStateName:"addField",
    fieldItemStateValue:true
   }))
   onResetValues()
   }}>Add</Button>
    <Button style={{"float":"left"}} onClick={()=>{exportForm(listfields)
   }}>Export</Button>
    <Button style={{"float":"left"}} onClick={()=>{exportForm(listfields)
   }}>Import</Button>
   <Input
   type="file"
   onChange={handleFileUpload}
   />
  </>
)


}