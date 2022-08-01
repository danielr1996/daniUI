import {FunctionComponent, ReactElement} from "react";

type Props = {
    children: ReactElement
}
export const Link: FunctionComponent<Props> = ({children})=>{
    return <div className="not-prose">{children}</div>
}
