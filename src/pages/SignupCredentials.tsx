import type React from "react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SignupContext } from "../App"
import Button from "../components/Button"
import Input from "../components/Input"
import { useFormValidation } from "../hooks/useFormValidation"

const SignupCredentials: React.FC = () => {
  const navigate = useNavigate()
  const { signupData, setSignupData } = useContext(SignupContext)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const validationRules = {
    email: (value: string) => {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return "Please enter a valid email address"
      }
      return null
    },
    password: (value: string) => {
      if (value.length < 8) {
        return "Password must be at least 8 characters long"
      }
      return null
    },
    confirmPassword: (value: string) => {
      if (value !== values.password) {
        return "Passwords do not match"
      }
      return null
    },
  }

  const { values, errors, handleChange, validateForm } = useFormValidation(
    {
      email: signupData.email || "",
      password: signupData.password || "",
      confirmPassword: "",
    },
    validationRules,
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setSignupData({ ...signupData, email: values.email, password: values.password })
      navigate("/signup/details")
    }
  }

  return (
    <>
     <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100 px-6 lg:col-span-1">
        <div className="space-y-2 mb-8 text-center">
          <h2 className="text-xl">Hey!</h2>
          <h1 className="text-3xl font-semibold">Welcome back.</h1>
        </div>
        <div className="relative w-full max-w-md flex justify-center">
          <img
            src={require("../images/Signup2.svg").default}
            alt="Login illustration"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto"
          />
        </div>
      </div>
  
      {/* Right Section */}
      <div className="flex flex-col justify-center items-center h-screen bg-white px-6 lg:col-span-1">
        <div className="w-full max-w-md mx-auto space-y-8">
          <div className="flex justify-center items-center gap-2">
            <img
              src={require("../images/logo.svg").default}
              alt="Vep Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
        </div>
  
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">Create new Login credentials.</h2>
                <p className="text-gray-600">Enter your email ID to register your account and set a password.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter email ID"
                  value={values.email}
                  onChange={handleChange}
                  required
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-sm" role="alert">
                    {errors.email}
                  </p>
                )}

                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Set Password"
                    value={values.password}
                    onChange={handleChange}
                    required
                    aria-invalid={errors.password ? "true" : "false"}
                    aria-describedby={errors.password ? "password-error" : undefined}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && (
                  <p id="password-error" className="text-red-500 text-sm" role="alert">
                    {errors.password}
                  </p>
                )}

                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    required
                    aria-invalid={errors.confirmPassword ? "true" : "false"}
                    aria-describedby={errors.confirmPassword ? "confirm-password-error" : undefined}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p id="confirm-password-error" className="text-red-500 text-sm" role="alert">
                    {errors.confirmPassword}
                  </p>
                )}

                <Button type="submit" className="w-auto px-12">
                  <a href="/signup/details" >
                  NEXT
                  </a>
                </Button>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default SignupCredentials

