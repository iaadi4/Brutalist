import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "destructive" | "outline" | "ghost" | "accent"
  size?: "default" | "sm" | "lg" | "icon" | "massive"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Hard mechanical shadows and immediate transitions, zero roundness
    const baseClass = "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold uppercase transition-transform transform active:translate-x-1 active:translate-y-1 active:shadow-[-2px_-2px_0px_#000] disabled:pointer-events-none disabled:opacity-50 brutal-border tracking-wider"
    
    const variants = {
      default: "bg-[var(--color-brutal-black)] text-[var(--color-brutal-white)] shadow-[4px_4px_0px_#000] hover:bg-[var(--color-brutal-gray-900)]",
      destructive: "bg-[var(--color-brutal-red)] text-white shadow-[4px_4px_0px_#000]",
      outline: "bg-transparent text-[var(--color-brutal-black)] shadow-[4px_4px_0px_#000] hover:bg-[var(--color-brutal-yellow)]",
      ghost: "border-none hover:bg-[var(--color-brutal-gray-100)]",
      accent: "bg-[var(--color-brutal-yellow)] text-[var(--color-brutal-black)] shadow-[4px_4px_0px_#000] hover:bg-[var(--color-brutal-cyan)] border-[4px]"
    }
    
    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-9 px-3 text-xs",
      lg: "h-14 px-8 text-base",
      icon: "h-12 w-12",
      massive: "h-24 px-12 text-2xl border-[4px] shadow-[8px_8px_0px_#000]"
    }

    return (
      <Comp
        className={cn(baseClass, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
