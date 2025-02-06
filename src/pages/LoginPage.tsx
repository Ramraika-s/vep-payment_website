import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Input from "../components/Input"

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
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
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Section */}
        <div className="space-y-2 text-center">
          <h2 className="text-xl">Hey!</h2>
          <h1 className="text-3xl font-semibold">Welcome back.</h1>
        </div>
        <div className="min-h-screen grid md:grid-cols-2">
          <img
            src={require("../images/Login.svg").default}
            alt="Login illustration"
            className="w-full max-w-md h-auto"
          />
        </div>
  
  
      {/* Right Section */}
      <div className="flex flex-col justify-center p-8 md:p-12">
        <div className="w-full max-w-md mx-auto space-y-8">
          <div className="flex justify-center ">
            <img
              src={require("../images/logo.svg").default}
              alt="Vep Logo"
            />
          </div>
        </div>
  
        <div className="space-y-6 ">
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
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-label="Password"
              />
      
            </div>
  
            {error && (
              <p className="text-red-500 text-sm text-center" role="alert">
                {error}
              </p>
            )}
  
            <Button type="submit" variant="primary" className="w-full">
              LOGIN
              </Button>
  
            <div className="text-center space-y-4">
                <button
                  type="button"
                  onClick={() => console.log("Forgot Password clicked")}
                  className="text-[#BF138F] hover:underline focus:outline-none"
                >
                  Forgot Password?
                </button>
              <p className="text-sm">
                Don't have an account?{" "}
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => navigate("/signup")}
                >
                  SIGN UP
                </Button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
