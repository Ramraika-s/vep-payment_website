import type React from "react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SignupContext } from "../App"
import Button from "../components/Button"

const SignupUsername: React.FC = () => {
  const navigate = useNavigate()
  const { signupData, setSignupData } = useContext(SignupContext)
  const [username, setUsername] = useState(signupData.username || "")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!username) {
      setError("Please enter a username")
      return
    }

    setSignupData({ ...signupData, username })
    navigate("/signup/success")
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
            src={require("../images/Signup4.svg").default}
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
              <h2 className="text-2xl font-semibold">Set up your username</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-3">
                <span className="text-gray-500">vep.me/</span>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="flex-1 bg-transparent outline-none"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <p className="text-sm text-gray-600">
                This will be the unique name using which other users can find and pay you.
              </p>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button type="submit" className="w-auto px-12">
                  <a href="/signup/success" className="text-[#B71DDE] font-medium hover:underline">
                  PROCEED
                  </a>
                </Button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default SignupUsername

