import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types/product";
import { MemoryRouter } from "react-router-dom"; // ✅ Add this

const sampleProduct: Product = {
  id: "c604ed8a-43e5-4650-8a5d-29c36c5e0344",
  name: "Airpods Wireless Bluetooth Headphones",
  image: "/images/airpods.jpg",
  description:
    "Bluetooth technology lets you connect it with compatible devices wirelessly. High-quality AAC audio offers immersive listening experience. Built-in microphone allows you to take calls while working.",
  brand: "Apple",
  category: "Electronics",
  price: 89.99,
  countInStock: 10,
  rating: 4.5,
  numReviews: 12,
};

const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  render: () => <ProductCard {...sampleProduct} />,
};
