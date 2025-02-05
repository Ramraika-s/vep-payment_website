import type React from "react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SignupContext } from "../App"
import Button from "../components/Button"
import Input from "../components/Input"

const SignupBusiness: React.FC = () => {
  const navigate = useNavigate()
  const { signupData, setSignupData } = useContext(SignupContext)
  const [businessName, setBusinessName] = useState(signupData.businessName || "")
  const [businessType, setBusinessType] = useState(signupData.businessType || "")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!businessName || !businessType) {
      setError("Please fill in all required fields")
      return
    }

    setSignupData({ ...signupData, businessName, businessType })
    navigate("/signup/username")
  }

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100 px-6 lg:col-span-1">
        <div className="space-y-2 mb-8 text-center">
          <h2 className="text-xl">Hey!</h2>
          <h1 className="text-3xl font-semibold">Welcome back.</h1>
        </div>
        <div className="relative w-full max-w-md flex justify-center">
          <img
            src={require("../images/Signup3.svg").default}
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
              <h2 className="text-2xl font-semibold">Business Details</h2>
              <p className="text-gray-600">Provide your required business details for your account.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                placeholder="Enter Company Name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                required
              />

              <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
                Business Type
              </label>
              <select
                id="businessType"
                className="w-full p-3 bg-gray-100 rounded-lg"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                required
              >
                <option value="">Select business type</option>
                <option value="LLC">LLC</option>
                <option value="Corporation">Corporation</option>
                <option value="Partnership">Partnership</option>
                <option value="Sole Proprietorship">Sole Proprietorship</option>
              </select>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button type="submit" className="w-auto px-12">
                  <a href="/signup/username" className="text-[#B71DDE] font-medium hover:underline">
                  NEXT
                  </a>
                </Button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default SignupBusiness

