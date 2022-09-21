import {Button} from "./lib/Button";
import {ButtonBar} from "./lib/ButtonBar";

export function KitchenSink() {
    return <article className="prose dark:prose-invert prose-neutral">
        <h1>Kitchensink</h1>
        <section>
            <h2>Button</h2>
            <Button type="primary">
                <button>Primary</button>
            </Button><br/>
            <Button type="error" wrapper={e => <span>{e}Test</span>}>
                <button>Error</button>
            </Button><br/>
            <Button type="accent">
                <button>Accent</button>
            </Button><br/>
            <Button type="accent" >
                <span className="not-prose">
                    <a  href="/">Link</a></span>
            </Button>
            <h2>ButtonBar</h2>
            <ButtonBar>
                <Button type="primary">
                    <button>Primary</button>
                </Button>
                <Button type="error">
                    <button>Error</button>
                </Button>
                <Button type="accent" wrapper={e => <span className="relative">
                    {e}
                    <span className="absolute -bottom-10 left-0">Tooltip</span>
                    </span>}>
                    <button>Accent</button>
                </Button>
            </ButtonBar>
        </section>
        {/*<section>*/}
        {/*    <h2>Select</h2>*/}
        {/*    <input list="browsers" />*/}
        {/*    <datalist id="browsers">*/}
        {/*        <option value="Opera" />*/}
        {/*            <option value="Safari" />*/}
        {/*                <option value="Firefox" />*/}
        {/*                    <option value="Google Chrome" />*/}
        {/*                        <option value="Maxthon" />*/}
        {/*    </datalist>*/}
        {/*</section>*/}
    </article>
}
