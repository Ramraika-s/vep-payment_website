import type React from "react"
import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { SignupContext } from "../App"
import VepLogo from "../components/VepLogo"

const SignupSuccess: React.FC = () => {
  const navigate = useNavigate()
  const { signupData } = useContext(SignupContext)

  useEffect(() => {
    // Here you would typically send the signupData to your backend
    console.log("Signup data:", signupData)

    const timer = setTimeout(() => {
      navigate("/")
    }, 5000)

    return () => clearTimeout(timer)
  }, [navigate, signupData])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md text-center space-y-8">
        <VepLogo />

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Account created Successfully!!!</h1>
          <p className="text-gray-600">You can login to your account through the credentials created.</p>
          <a href="/" className="text-[#B71DDE] font-medium">
            LOGIN NOW
          </a>
        </div>

        <img
          src="../images/Signup5.svg"
          alt="Success illustration"
          className="w-full max-w-xs mx-auto"
        />

        <p className="text-sm text-gray-500">
          Account verification is pending, you can verify your account through the mail sent to your email.
        </p>
      </div>
    </div>
  )
}

export default SignupSuccess

