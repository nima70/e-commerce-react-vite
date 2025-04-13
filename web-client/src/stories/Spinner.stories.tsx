// src/components/ui/Spinner.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "@/components/ui/spinner";

const meta: Meta<typeof Spinner> = {
    title: "Components/Spinner",
    component: Spinner,
    tags: ["autodocs"],
    argTypes: {
      size: {
        control: "radio",
        options: ["small", "medium", "large"],
      },
      label: {
        control: "text",
      },
      className: {
        control: "text",
      },
    },
  };
  
  export default meta;
  type Story = StoryObj<typeof Spinner>;
  
  export const Default: Story = {
    args: {
      size: "medium",
      label: "Loading...",
    },
  };
  
  export const Small: Story = {
    args: {
      size: "small",
      label: "Loading small",
    },
  };
  
  export const LargeWithColor: Story = {
    args: {
      size: "large",
      label: "Please wait...",
      className: "text-red-500",
    },
  };