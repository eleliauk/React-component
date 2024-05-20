import type {Meta, StoryObj} from "@storybook/react";
import {Upload} from "./Upload.tsx";
const meta:Meta<typeof Upload> = {
    title: 'Component/Upload',
    component: Upload,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} ;

export default meta;
type Story = StoryObj<typeof meta>;

export const Prepend: Story = {
    args: {
        action: 'https://jsonplaceholder.typicode.com/posts',
    },
};
