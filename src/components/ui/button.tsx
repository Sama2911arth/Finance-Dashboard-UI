/**
 * Button Component
 * 
 * A versatile button component with multiple variants and sizes.
 * Built on top of Radix UI's Slot for compatibility with other components.
 */
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Button variants configuration using CVA
 * 
 * Defines different visual styles and sizes for the button:
 * 
 * Variants:
 * - default: Primary blue button with white text
 * - destructive: Red button for destructive actions 
 * - outline: Transparent button with a border
 * - secondary: Secondary styled button
 * - ghost: Button with no background until hovered
 * - link: Button that looks like a link
 * 
 * Sizes:
 * - default: Standard size
 * - sm: Small size
 * - lg: Large size
 * - icon: Square button for icons
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary/90 text-white",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * Button component props
 * 
 * Extends standard button props with:
 * - variant and size options from buttonVariants
 * - asChild: when true, the component renders its children via Slot
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

/**
 * Button Component
 * 
 * A customizable button that can either render as a standard button
 * or pass its properties to its child when asChild is true.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }