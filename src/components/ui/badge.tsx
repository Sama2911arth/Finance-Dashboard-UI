/**
 * Badge Component
 * 
 * A versatile badge component for displaying short status descriptors.
 * Supports various visual variants for different use cases.
 */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge variants configuration using CVA
 * 
 * Defines different visual styles for the badge:
 * - default: Blue primary badge with white text
 * - secondary: Secondary color badge
 * - destructive: Red badge for warnings or errors
 * - outline: Simple outlined badge with current text color
 */
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-white",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline:
          "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Badge component props
 * 
 * Extends standard div props with the variant options defined in badgeVariants
 */
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

/**
 * Badge Component
 * 
 * Renders a badge element with the selected variant styling.
 * Can be customized with className or variant props.
 */
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
