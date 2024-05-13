import {Iinput} from "./Input.tsx";
import type {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
const meta:Meta<typeof Iinput> = {
    title: 'Component/Input',
    component: Iinput,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs

    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} ;

export default meta;
type Story = StoryObj<typeof meta>;

export const Truth: Story = {
    args: {
        placeholder:"请输入",
        disabled:false,
        handleChange:fn()
    },
};
export const False: Story = {
    args: {
        placeholder:"请输入111",
        disabled:true
    },
};