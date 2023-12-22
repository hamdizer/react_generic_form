export const setFieldItemValues=(values)=>{
    return {
        type:"SET_FIELD_ITEM_VALUES",
        payload:values
    }
}
export const setPageState=(e)=>{
    return {
        type:"SET_PAGE_STATE",
        payload:e
    }
}