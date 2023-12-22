import { fieldItemValues, pageState } from "./FormItemConstants";

export const inistialState={
    allfieldItems:[],
    currentFieldItem:fieldItemValues(),
    pageState:pageState(),
}
export const fieldItemsReducer=(state=inistialState,action)=>{

    switch(action.type){
        case "SET_FIELD_ITEM_VALUES":
            const {fieldItemName,fieldItemValues}=action.payload
            return {...state,
                currentFieldItem: {...state.currentFieldItem,[fieldItemName]:fieldItemValues}}
        case "SET_ALL_FIELD_ITEMS_VALUES":
                    return {...state,
                        currentFielItem: action.payload
}
        case "SET_PAGE_STATE":
            const {fieldItemStateName,fieldItemStateValue}=action.payload
            return {...state,
            pageState: {...state.pageState,[fieldItemStateName]:fieldItemStateValue}}
        case "ADD_NEW_FIELD":
            return {...state,
                allfieldItems: [...state.allfieldItems,action.payload]}    
        case "DELETE_FIELD":
            const newFieldItems= state.allfieldItems.filter((item) => item.id !== action.payload);
            return {...state,
                allfieldItems: newFieldItems}  
        case "SET_ALL_FIELDS":
            return {...state,
                allfieldItems: action.payload}              
        default:{
                return state
            }
    }
}