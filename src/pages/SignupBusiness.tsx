import type React from "react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SignupContext } from "../App"
import Button from "../components/Button"
import Input from "../components/Input"
import VepLogo from "../components/VepLogo"

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
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="flex items-center justify-center p-8 md:p-12">
        <img
          src="../images/Signup3.svg"
          alt="Steps remaining illustration"
          className="w-full max-w-md"
        />
      </div>

      <div className="flex flex-col justify-center p-8 md:p-12">
        <div className="w-full max-w-md mx-auto space-y-8">
          <VepLogo showBack onBack={() => navigate(-1)} />

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
    </div>
  )
}

export default SignupBusiness

