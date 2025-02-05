import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary"
}

const Button: React.FC<ButtonProps> = React.memo(({ children, variant = "primary", className = "", ...props }) => {
  const baseStyle = "w-full px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
  const variantStyles = {
    primary: "bg-[#B71DDE] text-white hover:bg-[#B71DDE]/90",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
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

