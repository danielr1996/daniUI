import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Button} from "./Button";

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        text: {control: {type: 'text'}},
        wrapper: {table: {disable: true}},
        wrapped: {control: 'boolean'}
    },
} as ComponentMeta<any>;

const Template: ComponentStory<any> = ({text='Button', wrapped,className, ...args}) =>
    wrapped ?
        <Button{...args} wrapper={e=><span>{e}Wrapped</span>}><button>{text}</button></Button> :
        <Button className={className} {...args}>
            <button>{text}</button>
        </Button>;
export const Primary = Template.bind({});
