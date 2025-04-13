import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@/components/ui/separator"; // ✅ adjust path if needed

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
    decorative: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
    className: "my-4 bg-gray-300 h-px w-full",
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    className: "mx-4 bg-gray-300 w-px h-20",
  },
};

export const Decorative: Story = {
  args: {
    decorative: true,
    orientation: "horizontal",
    className: "my-4 bg-gray-400 h-px w-full",
  },
};
