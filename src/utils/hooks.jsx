import { setFieldItemValues } from "../store/FormItemActions"
import { useDispatch } from "react-redux"
export const Hooks=()=>{
const dispatch=useDispatch()

     const onResetValues=()=>{
        dispatch(setFieldItemValues({
            fieldItemName:"id",
            fieldItemValues:""  
        }));
        dispatch(setFieldItemValues({
            fieldItemName:"name",
            fieldItemValues:""  
        }))
        dispatch(setFieldItemValues({
            fieldItemName:"value",
            fieldItemValues:""  
        }))
        dispatch(setFieldItemValues({
            fieldItemName:"options",
            fieldItemValues:""  
        }))
        dispatch(setFieldItemValues({
            fieldItemName:"disabled",
            fieldItemValues:false  
        }))
        dispatch(setFieldItemValues({
            fieldItemName:"type",
            fieldItemValues:""  
        }))
        dispatch(setFieldItemValues({
            fieldItemName:"checked",
            fieldItemValues:false 
        }))

    }
    const onChangeInput=(event)=>{
        dispatch(setFieldItemValues({
            fieldItemName:event.target.name,
            fieldItemValues:event.target.value
        }

        ))
    }
    const onChangeOptions=(options)=>{
        dispatch(setFieldItemValues({
            fieldItemName:"options",
            fieldItemValues:options
        }

        ))
    }

    const handleEditFieldItem=(record)=>{
        console.log("record",record)
        dispatch(setFieldItemValues({
            fieldItemName:"id",
            fieldItemValues:record.id  
        }));
        dispatch(setFieldItemValues({
            fieldItemName:"name",
            fieldItemValues:record.name  
        }))
        dispatch(setFieldItemValues({
            fieldItemName:"value",
            fieldItemValues:record.value
        }))
        dispatch(setFieldItemValues({
            fieldItemName:"options",
            fieldItemValues:record.options 
        }))
        dispatch(setFieldItemValues({
            fieldItemName:"disabled",
            fieldItemValues:record.disabled
        }))
        dispatch(setFieldItemValues({
            fieldItemName:"type",
            fieldItemValues:record.type
        }))
      

    }
     const exportForm=(json)=>{
        const data = JSON.stringify(json);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'data.json';
        link.click();
        URL.revokeObjectURL(url);

    }
    const handleDeleteItem=(id)=>{
        

    }

return ({
    onResetValues,
    onChangeInput,
    handleEditFieldItem,
    onChangeOptions,
    exportForm,
})
}