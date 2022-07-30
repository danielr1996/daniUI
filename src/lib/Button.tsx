import React, {FunctionComponent, ReactElement} from "react";
import classNames from "classnames/dedupe";

type Props = {
    children: ReactElement
}

const buttonFactory = (classes: string)=>({children}: Props) => {
    const button = children
    const className = classNames(button.props.className,classes)
    const props = {
        type: 'button',
        ...button.props,
        className
    }
    return React.cloneElement(button, props)
}


export const Button: FunctionComponent<Props> = ({children})=>{

    return buttonFactory(classNames('text-black',
        'bg-amber-500',
        'rounded-lg',
        'py-1',
        'px-3',))({children})
}
