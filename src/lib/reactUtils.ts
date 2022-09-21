import React, {ReactElement} from "react";

export const ReactUtil = {
    mergeElement: (e: ReactElement, props: {[key in string]: string|number|boolean})=>React.cloneElement(e, {...e.props, ...props}),
}
