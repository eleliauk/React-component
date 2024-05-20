import React, { InputHTMLAttributes,ReactElement } from "react";
import classNames from "classnames";
// import { IconProp } from "@fortawesome/fontawesome-svg-core";
// import { Icon } from "../icon/icon";
import './_style.scss'
export type prepandType = string | ReactElement
export type inputSize = 'lg' | 'small';

export interface inputProps extends Omit<InputHTMLAttributes<HTMLElement>,'size'> {
    disabled?: boolean;
    size?: inputSize;
    prepend?: prepandType;
    append?: prepandType;
}

export const Input:React.FC<inputProps> = (props) => {
    const {
        disabled,
        size,
        prepend,
        append,
        ...restProps
    } = props

    const classes = classNames('input', {
        disabled,
        [`input-${size}`]: size,
        'input-group':prepend || append,
        'input-group-append':append,
        'input-group-prepend':prepend
    })

    return (
        <div className={classes}>
            {prepend?<div className="input-prepand">{prepend}</div>:''}
            <input className='input-inner' {...restProps} disabled={disabled}></input>
            {append?<div className="input-append">{append}</div>:''}
        </div>
    )
}
export default Input

