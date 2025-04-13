import type { Meta, StoryObj } from "@storybook/react";
import PurchaseCard from "@/components/PurchaseCard";

const meta: Meta<typeof PurchaseCard> = {
  title: "Components/PurchaseCard",
  component: PurchaseCard,
  tags: ["autodocs"],
  argTypes: {
    price: {
      control: { type: "number" },
    },
    countInStock: {
      control: { type: "number" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PurchaseCard>;

export const Default: Story = {
  args: {
    price: 39.99,
    countInStock: 5,
    onSubmit: async (qty: number) => {
      console.log(qty);
    },
  },
};
export const Second: Story = {
  args: {
    price: 39.99,
    countInStock: 0,
    onSubmit: async (qty: number) => {
      console.log(qty);
    },
  },
};
