import type React from "react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import { SignupContext } from "../App"
import Button from "../components/Button"
import Input from "../components/Input"
import VepLogo from "../components/VepLogo"
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
      <Helmet>
        <title>Create Login Credentials - Vep Digital Payment</title>
        <meta name="description" content="Set up your email and password for your Vep Digital Payment account." />
      </Helmet>
      <div className="min-h-screen grid md:grid-cols-2">
        <div className="flex items-center justify-center p-8 md:p-12">
          <img
            src="../images/Signup2.svg"
            alt="Secure login illustration"
            className="w-full max-w-md"
          />
        </div>

        <div className="flex flex-col justify-center p-8 md:p-12">
          <div className="w-full max-w-md mx-auto space-y-8">
            <div className="flex justify-end">
              <VepLogo showBack onBack={() => navigate(-1)} />
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
                  <a href="/signup/details" className="text-[#B71DDE] font-medium hover:underline">
                  NEXT
                  </a>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupCredentials

