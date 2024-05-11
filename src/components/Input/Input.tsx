import React, {ChangeEvent} from "react";

interface InputProps {
    disabled?: boolean;
    placeholder?: string;
    handleChange?: ChangeEvent<HTMLInputElement>;
}
export const Iinput:React.FC<InputProps>=({disabled,placeholder})=>{
    const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
        console.log(event.currentTarget);
    }
  return(
     <input type="text" placeholder={placeholder} disabled={disabled} onChange={handleChange}/>
  )
}

