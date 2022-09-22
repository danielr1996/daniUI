import React, {FunctionComponent, ReactElement, ReactNode} from "react";
import classNames from "classnames/dedupe";
import {ReactUtil} from "./reactUtils";
import {Orientation} from "./CommonProps";

type Props = {
    children: ReactElement[]
    orientation?: Orientation
}
export const ButtonBar: FunctionComponent<Props> = ({children, orientation= 'horizontal'}) => {
    const className= classNames({
        'flex-col': orientation === 'vertical',
        'items-stretch': orientation === 'vertical',
    },
        'inline-flex')
    return <div className={className}>{children.map((child, index)=>{
        const className = classNames({
            'rounded-none': true,
            'rounded-r-lg': index === children.length-1 && orientation === 'horizontal',
            'rounded-l-lg': index === 0 && orientation === 'horizontal',
            'border-l-2': index !== 0 && orientation === 'horizontal',
            'rounded-b-lg': index === children.length-1 && orientation === 'vertical',
            'rounded-t-lg': index === 0 && orientation === 'vertical',
            'border-b-2': index !== 0 && orientation === 'vertical',
        },)
        const props = {
            ...child.props,
            key: index,
            className: classNames(child.props.className, className)
        }
        return ReactUtil.mergeElement(child, props)
    })}</div>
}
