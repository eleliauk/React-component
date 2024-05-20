import React, {ReactNode} from "react";

export interface formProps {
    name?: string;
    children?: ReactNode;
}


export const Form: React.FC<formProps> = (props) => {
    const {
        name,
        children
    } = props;
    return (
        <form name={name} className = "form">
            {children}
        </form>
    )
}
export default Form