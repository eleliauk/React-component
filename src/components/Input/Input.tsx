import React, {ChangeEvent} from "react";

interface InputProps {
    disabled?: boolean;
    placeholder?: string;
    handleChange?: (value: ChangeEvent) => void;
}
export const Iinput:React.FC<InputProps>=({disabled,placeholder,handleChange})=>{
    return(
     <input type="text" placeholder={placeholder} disabled={disabled} onChange={handleChange}/>
  )
}

