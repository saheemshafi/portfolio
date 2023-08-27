"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { ButtonHTMLAttributes } from "react";
import { ImSpinner8 } from "react-icons/im";
import { ButtonVariant, buttonVariants } from "./_buttonVariants";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariant {
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      type = "button",
      variant,
      buttonStyle,
      size,
      children,
      loading,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        {...props}
        className={cn(
          buttonVariants({ size, variant, buttonStyle }),
          className,
        )}
        disabled={loading}
      >
        {loading && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: "360deg" }}
            transition={{
              bounce: true,
              ease: "easeInOut",
              rotate: {
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                duration: 0.8,
              },
            }}
            className="inline-block align-middle"
          >
            <ImSpinner8 />
          </motion.span>
        )}
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export default Button;
