import React from "react";

interface InputProps {
    disabled?: boolean;
    placeholder?: string;
}
export const Iinput:React.FC<InputProps>=({disabled,placeholder})=>{
  return(
     <input type="text" placeholder={placeholder} disabled={disabled}/>
  )
}

