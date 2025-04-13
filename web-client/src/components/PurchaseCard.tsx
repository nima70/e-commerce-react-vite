import React from "react";
import { Command, CommandItem } from "./ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
interface Prop {
  price: number;
  countInStock: number;
  onSubmit: (qty: number) => Promise<void>;
}

const PurchaseCard = (prop: Prop) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("0");
  const selectHandler = (currentValue: any) => {
    setValue(currentValue === value ? "" : currentValue);
    setOpen(false);
  };
  const { price, countInStock, onSubmit } = prop;
  const addToCartHandler = () => {
    const qty = Number(value);
    onSubmit(qty);
  };

  return (
    <div className="border px-3 py-2 shadow-md rounded-sm ">
      <div className=" flex border-b py-2">
        <div className="flex-1 ">Price</div>
        <div className="flex-1">{price}</div>
      </div>
      <div className=" flex border-b py-2">
        <div className="flex-1">Status</div>
        <div className="flex-1">
          {countInStock > 0 ? <div>In Stock</div> : <div>out of stock</div>}
        </div>
      </div>
      <div className=" flex py-2 border-b">
        <div className="flex-1">Qty</div>
        <div className="flex-1 ">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                role="combobox"
                variant={"outline"}
                aria-expanded={open}
                className="w-[200px] justify-between"
              >
                {value}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Command>
                {countInStock > 0 ? (
                  Array.from({ length: countInStock + 1 }).map((_, i) => (
                    <CommandItem key={i} onSelect={selectHandler}>
                      {i}
                    </CommandItem>
                  ))
                ) : (
                  <CommandItem disabled>Out of Stock</CommandItem>
                )}
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className=" flex  py-2">
        <Button onClick={addToCartHandler}>Add to cart</Button>
      </div>
    </div>
  );
};

export default PurchaseCard;
