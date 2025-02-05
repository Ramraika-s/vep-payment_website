import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Input from "../components/Input"
import VepLogo from "../components/VepLogo"

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

    // Implement login logic here
    console.log("Login attempted with:", { email, password })
    // For demonstration purposes, we'll just show an error
    setError("Invalid email or password")
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="flex items-center justify-center p-8 md:p-12">
        <img
          src="../images/Login.svg"
          alt="Login illustration"
          className="w-full max-w-md"
        />
      </div>

      <div className="flex flex-col justify-center p-8 md:p-12">
        <div className="w-full max-w-md mx-auto space-y-8">
          <div className="flex justify-end">
            <VepLogo />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">Login to your account.</h1>
              <p className="text-gray-600">Enter your registered email ID and password.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                <p className="text-red-500 text-sm" role="alert">
                  {error}
                </p>
              )}

              <Button type="submit">LOGIN</Button>

              <div className="text-center space-y-4">
                <p className="text-sm">
                  <button
                    type="button"
                    onClick={() => console.log("Forgot Password clicked")}
                    className="text-[#B71DDE] hover:underline"
                  >
                    Forgot Password?
                  </button>
                </p>
                <p className="text-sm">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/signup")}
                    className="text-[#B71DDE] font-medium hover:underline"
                  >
                    SIGN UP
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

