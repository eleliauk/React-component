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

export const Prepend: Story = {
    args: {
        placeholder:"请输入",
        prepend:'1235',
    },
};
export const Append: Story = {
    args: {
        placeholder:"Append",
        append:'后缀'
    },
};
export const Large: Story = {
    args:{
        placeholder:"这是大号",
        size:"lg",
    }
}
