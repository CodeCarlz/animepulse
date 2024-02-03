import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/utils";

const buttonVariants = cva(
  "  rounded-lg font-medium flex items-center justify-center",
  {
    variants: {
      variant: {
        primary: "text-white transition-colors bg-red-500 bg-pink-600 z-10",
        secondary: "text-white",
        nextButton: "bg-gray-800 opacity-80 text-white  rounded-md text-2xl",
      },
      size: {
        default: "py-1 px-2 text-sm",
        sm: "py-2 px-3",
        lg: "py-4 px-1",
        xl: "py-1 px-2 text-2xl md:text-3xl lg:text-5xl h-24 ",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Button = ({ children, className, size, variant, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      // className={`text-white bg-pink-600  ${padding ? padding : "py-3 px-4"} rounded-lg font-medium`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
