import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary"
}

const Button: React.FC<ButtonProps> = React.memo(({ children, variant = "primary", className = "", ...props }) => {
  const baseStyle = "px-[38px] py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
  const variantStyles = {
    primary: "bg-[#BF138F] text-white hover:bg-[#BF138F]/90",
    secondary: "bg-[#BF138F] text-white hover:bg-[#BF138F]/90",
  }

  return (
    <button className={`${baseStyle} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
      {variant === "primary" && (
        <span className="ml-2" aria-hidden="true">
          →
        </span>
      )}
    </button>
  )
})

Button.displayName = "Button"

export default Button



