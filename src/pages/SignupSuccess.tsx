import type React from "react"
import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { SignupContext } from "../App"

const SignupSuccess: React.FC = () => {
  const navigate = useNavigate()
  const { signupData } = useContext(SignupContext)

  useEffect(() => {
    console.log("Signup data:", signupData)

    const timer = setTimeout(() => {
      navigate("/")
    }, 5000)

    return () => clearTimeout(timer)
  }, [navigate, signupData])

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white px-6 lg:col-span-1">
    <div className="w-full max-w-md mx-auto space-y-8">
      <div className="flex justify-center items-center gap-2">
        <img
          src={require("../images/logo.svg").default}
          alt="Vep Logo"
          className="h-10 w-10 rounded-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Account created Successfully!!!</h1>
          <p className="text-gray-600">You can login to your account through the credentials created.</p>
          <a href="/" className="text-[#B71DDE] font-medium">
            LOGIN NOW
          </a>
        </div>

        <img
            src={require("../images/Signup5.svg").default}
            alt="Login illustration"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto"
          />

        <p className="text-sm text-gray-500">
          Account verification is pending, you can verify your account through the mail sent to your email.
        </p>
      </div>
    </div>
  )
}

export default SignupSuccess

