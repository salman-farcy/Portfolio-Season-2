import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        " bg-primary flex h-[48px] rounded-md border text-accent border-white/10 focus:border-accent font-light  px-4 py-5 text-base placeholder:text-white/60 outline-none ",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
