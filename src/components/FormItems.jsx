import { useSelector } from "react-redux"
import { AddEdit } from "./AddEdit/addEdit"
import { FieldItemsList } from "./List/FormItems"
export const FormItems=()=>{
   const pageState=useSelector((state)=>state.fieldItemsReducer.pageState)
    return(
          pageState.addField || pageState.editField?
          <AddEdit />
          :<FieldItemsList />


    )
}