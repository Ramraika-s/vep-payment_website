import type React from "react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SignupContext } from "../App"
import Button from "../components/Button"
import Input from "../components/Input"

const SignupPhone: React.FC = () => {
  const navigate = useNavigate()
  const { signupData, setSignupData } = useContext(SignupContext)
  const [phone, setPhone] = useState(signupData.phone || "")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!/^\+?[1-9]\d{1,14}$/.test(phone)) {
      setError("Please enter a valid phone number")
      return
    }
    setSignupData({ ...signupData, phone })
    navigate("/signup/credentials")
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
          src={require("../images/SignUp1.svg").default}
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
                <h1 className="text-3xl font-bold">Sign Up to Vep.</h1>
                <p className="text-gray-600">Enter your phone number to register with your account.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="tel"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="bg-gray-100"
                  aria-label="Phone number"
                  aria-invalid={error ? "true" : "false"}
                  aria-describedby={error ? "phone-error" : undefined}
                />

                {error && (
                  <p id="phone-error" className="text-red-500 text-sm" role="alert">
                    {error}
                  </p>
                )}

                <Button type="submit">NEXT</Button>

                <p className="text-center text-sm">
                  Already have an account?{" "}
                  <a href="/signup/credentials" className="text-[#B71DDE] font-medium hover:underline">
                    LOGIN
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
     </>
  )
}

export default SignupPhone

