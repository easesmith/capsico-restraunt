import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        capsico: "bg-[#4A67FF] hover:bg-[#4A67FF] text-white",
        destructive:
          "bg-[#E4626F] hover:bg-[#e85362] text-destructive-foreground",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        wifi:"hover:bg-[#3ba0d6]",
        gst:"five-color class-lg7  border-[#C2CDD6]",
        gst2:"bg-[#4A67FF] hover:bg-[#506dfe] text-[#FFFFFF] class-xl2 border-[1px] border-[#4A67FF]",
        gst3:"bg-[#4A67FF] hover:bg-[#506dfe] text-[#FFFFFF] class-sm7 border-[1px] border-[#4A67FF]",
        gst4:"bg-[#FC3636] hover:bg-[#f64b4b] text-[#FFFFFF] class-sm7 border-[1px] border-[#FC3636]"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "rounded-lg px-4 h-12",
        icon: "h-10 w-10",
        gstSize:"px-7 py-1 border-[1px] rounded-none"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
