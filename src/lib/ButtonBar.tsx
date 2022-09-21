import React, {FunctionComponent, ReactElement, ReactNode} from "react";
import classNames from "classnames/dedupe";

type Props = {
    children: ReactElement[]
}
export const ButtonBar: FunctionComponent<Props> = ({children}) => {

    return <>{children.map((child, index)=>{
        const className = classNames({
            'rounded-none': true,
            'rounded-r-lg': index === children.length-1,
            'rounded-l-lg': index === 0,
            'border-l-2': index !== 0
        })
        const newClassName = classNames(child.props.className, className)
        const props = {
            ...child.props,
            className: newClassName
        }
        return React.cloneElement(child, props)
    })}</>
}
