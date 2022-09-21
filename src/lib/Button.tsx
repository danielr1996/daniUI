import React, {FunctionComponent, ReactElement} from "react";
import classNames from "classnames/dedupe";
import {ReactUtil} from "./reactUtils";
import {CommonProps} from "./CommonProps";

type HeadlessButtonProps = {
    className?: string
    children: ReactElement
} & CommonProps

export const HeadlessButton: FunctionComponent<HeadlessButtonProps> = ({className, children, wrapper}) => {
    let button = children

    const props = {
        type: 'button',
        ...button.props,
        className: classNames(button.props.className, className)
    }
    const newButton = ReactUtil.mergeElement(button, props)
    return wrapper ? wrapper(newButton) : newButton
}

type Props = {
    children: ReactElement,
    type?: 'error' | 'primary' | 'accent'
    className?: string
} & CommonProps
export const Button: FunctionComponent<Props> = ({children, type,className,wrapper}) => {
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
    return <HeadlessButton wrapper={wrapper} className={newClassName}>{children}</HeadlessButton>
}


