import {Input} from "./Input.tsx";
import type {Meta, StoryObj} from "@storybook/react";
const meta:Meta<typeof Input> = {
    title: 'Component/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} ;

export default meta;
type Story = StoryObj<typeof meta>;

export const Truth: Story = {
    args: {
        placeholder:"请输入",
        disabled:false,
        prepand:'1235',
        append:'2468',
        size:'lg'
    },
};
export const False: Story = {
    args: {
        placeholder:"请输入111",
        disabled:true
    },
};