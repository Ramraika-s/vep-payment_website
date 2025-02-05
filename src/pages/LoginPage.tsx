"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Input from "../components/Input"

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please enter both email and password")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long")
      return
    }
    console.log("Login attempted with:", { email, password })
    setError("Invalid email or password")
  }

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-gray-100 px-6">
        <div className="space-y-2 mb-8 text-center">
          <h2 className="text-xl">Hey!</h2>
          <h1 className="text-3xl font-semibold">Welcome back.</h1>
        </div>
        <div className="relative w-full max-w-md flex justify-center">
          <img
            src={require("../images/Login.svg").default || "/placeholder.svg"}
            alt="Login illustration"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-white px-6">
        <div className="w-full max-w-md mx-auto space-y-8">
          <div className="flex justify-center items-center gap-2">
            <img
              src={require("../images/logo.svg").default || "/placeholder.svg"}
              alt="Vep Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6 w-full max-w-md">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold">Login to your account.</h1>
            <p className="text-gray-600">Enter your registered email ID and password.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <Input
              type="email"
              placeholder="Enter email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email"
            />

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-label="Password"
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

            {error && (
              <p className="text-red-500 text-sm text-center" role="alert">
                {error}
              </p>
            )}

            <Button type="submit" className="w-full">
              LOGIN
            </Button>

            <div className="text-center space-y-4">
              <p className="text-sm">
                <button
                  type="button"
                  onClick={() => console.log("Forgot Password clicked")}
                  className="text-[#B71DDE] font-medium"
                >
                  Forgot Password?
                </button>
              </p>
              <p className="text-sm">
                Don't have an account?{" "}
                <button type="button" onClick={() => navigate("/signup")} className="text-[#B71DDE] font-medium">
                  SIGN UP
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

