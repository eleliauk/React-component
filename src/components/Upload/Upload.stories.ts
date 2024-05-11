import Upload from "./Upload.tsx";
import type {Meta, StoryObj} from "@storybook/react";
const meta:Meta<typeof Upload> = {
    title: 'Component/Upload',
    component: Upload,
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
    accept:"https://"
    },
};
