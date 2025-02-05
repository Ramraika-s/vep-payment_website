import type React from "react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SignupContext } from "../App"
import Button from "../components/Button"
import VepLogo from "../components/VepLogo"

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
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="flex items-center justify-center p-8 md:p-12">
        <img
          src="../images/Signup4.svg"
          alt="Get started illustration"
          className="w-full max-w-md"
        />
      </div>

      <div className="flex flex-col justify-center p-8 md:p-12">
        <div className="w-full max-w-md mx-auto space-y-8">
          <VepLogo showBack onBack={() => navigate(-1)} />

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
    </div>
  )
}

export default SignupUsername

