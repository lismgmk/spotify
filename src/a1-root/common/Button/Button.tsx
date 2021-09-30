import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './Button.module.scss'


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    color: 'green' | 'light-blue' | 'red'
    rounded: boolean
    width?: string | number | undefined
}

export const Button: React.FC<SuperButtonPropsType> = (
    {
        color,
        className,
        children,
        rounded,
        width,
        ...restProps
    }
) => {

    const widthBtn = {
        width: width
    }

    const finalClassName = ` ${s.button} ${rounded ? s.button__rounded : s.button__default} 
    ${color === 'green' ? s.button__green : color === 'light-blue' ? s.button__light_blue : s.button__red}`

    return (
        <button
            className={finalClassName}
            style={widthBtn}
            {...restProps}
        >
            <span>{children}</span>
        </button>
    )
}