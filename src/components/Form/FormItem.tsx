import {FC, ReactNode} from "react";
export interface formItemProps {
    label?: string;
    children: ReactNode;
}

export const FormItem: FC<formItemProps> = (props) => {
    const {
        label,
        children
    } = props;
    return (
        <div>
            {
                label &&
                <div className="form-label">
                    <label title={label}>
                        {label}
                    </label>
                </div>
            }
            <div className="form-item">{children}</div>
        </div>
    )
}
export default FormItem