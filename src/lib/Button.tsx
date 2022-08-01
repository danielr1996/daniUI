import React, {FunctionComponent, ReactElement} from "react";
import classNames from "classnames/dedupe";

type HeadlessButtonProps = {
    className: string
    children: ReactElement
}
const HeadlessButton: FunctionComponent<HeadlessButtonProps> = ({className, children}) => {
    const button = children

    const newClassName = classNames(button.props.className, className)
    const props = {
        type: 'button',
        ...button.props,
        className: newClassName
    }
    return React.cloneElement(button, props)
}

type Props = {
    children: ReactElement,
    type?: 'error' | 'primary' | 'accent'
    className?: string,
}
export const Button: FunctionComponent<Props> = ({children, type,className}) => {
    const newClassName = classNames(
        {
            'bg-red-500': type === 'error',
            'bg-blue-500': type === 'primary',
            'bg-amber-500': type === 'accent',
            'bg-white': !type,
            // @ts-ignore
            'text-black': ['error'].includes(type),
            // @ts-ignore
            'text-white': ['primary'].includes(type),
        },
        'rounded-lg',
        'py-1',
        'px-3',className)
    return <HeadlessButton className={newClassName}>{children}</HeadlessButton>
}


