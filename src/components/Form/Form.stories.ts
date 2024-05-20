import {Form} from "./Form.tsx";
import type {Meta, StoryObj} from "@storybook/react";
const meta:Meta<typeof Form> = {
    title: 'Component/Form',
    component: Form,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} ;

export default meta;
type Story = StoryObj<typeof meta>;

export const Prepend: Story = {
    args: {

    },
};
export const Append: Story = {
    args: {

    },
};
export const Large: Story = {
    args:{

    }
}
