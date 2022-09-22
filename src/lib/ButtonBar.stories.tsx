import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Button} from "./Button";
import {ButtonBar} from "./ButtonBar";

export default {
    title: 'Components/ButtonBar',
    component: ButtonBar,
} as ComponentMeta<any>;

const Template: ComponentStory<any> = ({...args}) =>
    <ButtonBar {...args}>
        <Button type="primary">
            <button>Primary</button>
        </Button>
        <Button type="secondary">
            <button>Secondary</button>
        </Button>
        <Button type="information">
            <button>Information</button>
        </Button>
        <Button type="success">
            <button>Success</button>
        </Button>
        <Button type="warning">
            <button>Warning</button>
        </Button>
        <Button type="error">
            <button>Error</button>
        </Button>
        <Button type="white">
            <button>White</button>
        </Button>
        <Button type="gray">
            <button>Gray</button>
        </Button>
        <Button type="black">
            <button>Black</button>
        </Button>
        {/*<Button type="accent" wrapper={e => <div className="relative">{e}<span className="absolute -bottom-10 left-0">Tooltip</span></div>}>*/}
        {/*    <button>Accent</button>*/}
        {/*</Button>*/}
    </ButtonBar>
export const Primary = Template.bind({});
