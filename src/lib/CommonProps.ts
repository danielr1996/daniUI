import {ReactElement} from "react";

export type CommonProps={
    wrapper?: (e: ReactElement)=> ReactElement
}

export type Color = 'primary'
    | 'secondary'
    | 'accent'
    | 'information'
    | 'success'
    | 'warning'
    | 'error'
    | 'white'
    | 'gray'
    | 'black'

export type Orientation = 'vertical' | 'horizontal'
