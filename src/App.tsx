import type React from "react"
import { useState, createContext, Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import ErrorBoundary from "./components/ErrorBoundary"

const LoginPage = lazy(() => import("./pages/LoginPage"))
const SignupPhone = lazy(() => import("./pages/SignupPhone"))
const SignupCredentials = lazy(() => import("./pages/SignupCredentials"))
const SignupBasicDetails = lazy(() => import("./pages/SignupBasicDetails"))
const SignupBusiness = lazy(() => import("./pages/SignupBusiness"))
const SignupUsername = lazy(() => import("./pages/SignupUsername"))
const SignupSuccess = lazy(() => import("./pages/SignupSuccess"))

export interface SignupData {
  phone?: string
  email?: string
  password?: string
  firstName?: string
  lastName?: string
  accountType?: "INDIVIDUAL" | "BUSINESS"
  currency?: string
  dateOfBirth?: string
  nationality?: string
  businessName?: string
  businessType?: string
  username?: string
}

interface SignupContextType {
  signupData: SignupData
  setSignupData: React.Dispatch<React.SetStateAction<SignupData>>
}

export const SignupContext = createContext<SignupContextType>({
  signupData: {},
  setSignupData: () => {},
})

const App: React.FC = () => {
  const [signupData, setSignupData] = useState<SignupData>({})

  return (
    <ErrorBoundary>
      <Helmet>
        <title>Vep Digital Payment - Secure Login and Signup</title>
        <meta
          name="description"
          content="Securely log in or sign up for Vep Digital Payment services. Manage your digital payments with ease and confidence."
        />
        <meta name="keywords" content="Vep, Digital Payment, Login, Signup, Secure Payment" />
      </Helmet>
      <Router>
        <SignupContext.Provider value={{ signupData, setSignupData }}>
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#B71DDE]"></div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPhone />} />
              <Route path="/signup/credentials" element={<SignupCredentials />} />
              <Route path="/signup/details" element={<SignupBasicDetails />} />
              <Route path="/signup/business" element={<SignupBusiness />} />
              <Route path="/signup/username" element={<SignupUsername />} />
              <Route path="/signup/success" element={<SignupSuccess />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path=""element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </SignupContext.Provider>
      </Router>
    </ErrorBoundary>
  )
}

export default App

