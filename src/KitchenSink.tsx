import {Button} from "./lib/Button";

export function KitchenSink() {

    return <>
        <Button>
            <button className="text-black" onClick={()=>console.log('click')}>Button</button>
        </Button>
    </>
}