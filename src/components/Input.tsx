import React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input: React.FC<InputProps> = React.memo(({ label, className = "", ...props }) => {
  const id = React.useId()

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="text-sm text-gray-600">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B71DDE]/20 ${className}`}
        {...props}
      />
    </div>
  )
})

Input.displayName = "Input"

export default Input

