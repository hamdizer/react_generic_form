export const Select=(props)=>{
  return(  
  <Select 
   id={props.id}
   value={props.value}
   style={props.style}
  
  
  > 
  {props.options.map((option,key)=>(
    <MenuItem key={key}>{option}</MenuItem>
))}
    </Select>
  )
}