import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-medium rounded-md cursor-pointer capitalize  disabled:hover:bg-bgHover disabled:bg-bgHover disabled:cursor-not-allowed transition-colors  transition-all duration-300 ",
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-bgHover text-background tracking-[1.5px]",
      },
      size: {
        default: "h-12 py-2 px-4",
        primary: "h-9 rounded-md px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
