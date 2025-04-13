import React from "react";
import { cn } from "@/lib/utils"; // Optional, or just use template strings

type SpinnerProps = {
  size?: "small" | "medium" | "large";
  className?: string;
  label?: string;
};

const sizeClasses = {
  small: "w-4 h-4 border-2",
  medium: "w-6 h-6 border-4",
  large: "w-10 h-10 border-4",
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = "medium",
  className = "",
  label,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4">
      <div
        className={cn(
          "rounded-full  border-primary border-t-transparent animate-spin",
          sizeClasses[size],
          className
        )}
      />
      {label && <span className="text-sm text-muted-foreground">{label}</span>}
    </div>
  );
};

export default Spinner;
