import type React from "react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import { SignupContext } from "../App"
import Button from "../components/Button"
import Input from "../components/Input"
import VepLogo from "../components/VepLogo"

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
      <Helmet>
        <title>Sign Up - Vep Digital Payment</title>
        <meta
          name="description"
          content="Start your Vep Digital Payment account creation by entering your phone number."
        />
      </Helmet>
      <div className="min-h-screen grid md:grid-cols-2">
        <div className="flex items-center justify-center p-8 md:p-12">
          <img
            src="../images/Signup1.svg"
            alt="Money transfer illustration"
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
      </div>
    </>
  )
}

export default SignupPhone

