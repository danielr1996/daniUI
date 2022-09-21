import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Button} from "../lib/Button";

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => <Button><button>Button</button></Button>;

export const Primary = Template.bind({});

