import type { Meta, StoryObj } from "@storybook/react";
import RatingSummary from "@/components/ui/RatingSummary";

const meta: Meta<typeof RatingSummary> = {
  title: "Components/RatingSummary",
  component: RatingSummary,
  tags: ["autodocs"],
  argTypes: {
    rating: {
      control: { type: "range", min: 0, max: 5, step: 0.1 },
    },
    numReviews: {
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RatingSummary>;

export const Default: Story = {
  args: {
    rating: 4.3,
    numReviews: 87,
  },
};

export const FullRating: Story = {
  args: {
    rating: 5,
    numReviews: 213,
  },
};

export const NoReviews: Story = {
  args: {
    rating: 0,
    numReviews: 0,
  },
};
