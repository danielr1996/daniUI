import React, {FunctionComponent, ReactElement} from "react";
import classNames from "classnames/dedupe";
import {ReactUtil} from "./reactUtils";
import {Color, CommonProps} from "./CommonProps";

type Props = {
    children: ReactElement,
    type: Color
    className?: string
} & CommonProps
export const Button: FunctionComponent<Props> = ({children, type = 'primary',wrapper, className=''}) => {
    const button = children

    const newClassName = classNames(
        {
            'bg-primary-400': type === 'primary',
            'bg-secondary-400': type === 'secondary',
            'bg-accent-400': type === 'accent',
            'bg-information': type === 'information',
            'bg-success': type === 'success',
            'bg-warning': type === 'warning',
            'bg-error': type === 'error',
            'bg-white': type === 'white',
            'bg-gray': type === 'gray',
            'bg-black': type === 'black',
            'text-black': ['error', 'accent'].includes(type),
            'text-white': ['primary'].includes(type),
        },
        'rounded-lg',
        'py-1',
        'px-3',
        className)
    const props = {
        type: 'button',
        ...button.props,
        className: classNames(button.props.className, newClassName)
    }
    const newButton = ReactUtil.mergeElement(button, props)
    // return <HeadlessButton wrapper={wrapper} className={newClassName}>{children}</HeadlessButton>
    return wrapper ? wrapper(newButton) : newButton
}


