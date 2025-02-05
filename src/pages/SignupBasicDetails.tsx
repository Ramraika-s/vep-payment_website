import type React from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { SignupContext } from "../App"
import Button from "../components/Button"
import Input from "../components/Input"
import { useFormValidation } from "../hooks/useFormValidation"
import ErrorBoundary from '../components/ErrorBoundary'

const SignupBasicDetails: React.FC = () => {
  const navigate = useNavigate();
  const { signupData, setSignupData } = useContext(SignupContext);

  const validationRules = {
    firstName: (value: string) => (value ? null : "First name is required"),
    lastName: (value: string) => (value ? null : "Last name is required"),
    dateOfBirth: (value: string) => (value ? null : "Date of birth is required"),
    nationality: (value: string) => (value ? null : "Nationality is required"),
    currency: (value: string) => (value ? null : "Currency is required"),
  };

  const { values, errors, handleChange, validateForm } = useFormValidation(
    {
      accountType: signupData.accountType || "BUSINESS",
      firstName: signupData.firstName || "",
      lastName: signupData.lastName || "",
      dateOfBirth: signupData.dateOfBirth || "",
      nationality: signupData.nationality || "",
      currency: signupData.currency || "",
    },
    validationRules,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSignupData({ ...signupData, ...values });
      navigate("/signup/business");
    }
  };

  return (
    <ErrorBoundary>
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

          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Basic Details</h2>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <p className="mb-4">Account will be used by/for:</p>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      className={`px-6 py-2 rounded-lg ${
                        values.accountType === "INDIVIDUAL" ? "bg-[#B71DDE] text-white" : "bg-gray-100"
                      }`}
                      onClick={() =>
                        handleChange({
                          target: { name: "accountType", value: "INDIVIDUAL" },
                        } as React.ChangeEvent<HTMLInputElement>)
                      }
                    >
                      INDIVIDUAL
                    </button>
                    <button
                      type="button"
                      className={`px-6 py-2 rounded-lg ${
                        values.accountType === "BUSINESS" ? "bg-[#B71DDE] text-white" : "bg-gray-100"
                      }`}
                      onClick={() =>
                        handleChange({
                          target: { name: "accountType", value: "BUSINESS" },
                        } as React.ChangeEvent<HTMLInputElement>)
                      }
                    >
                      BUSINESS
                    </button>
                  </div>
                </div>

                <div>
                  <p className="mb-4">Set your wallet's primary currency</p>
                  <select
                    name="currency"
                    className="w-full p-3 bg-gray-100 rounded-lg"
                    value={values.currency}
                    onChange={handleChange}
                    required
                    aria-label="Select currency" 
                  >
                    <option value="">Select currency</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                  {errors.currency && <p className="text-red-500 text-sm mt-1">{errors.currency}</p>}
                </div>

                <div className="space-y-4">
                  <p>Provide all your required details for your account</p>
                  <Input
                    name="firstName"
                    placeholder="Enter your First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    required
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                  <Input
                    name="lastName"
                    placeholder="Enter your Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    required
                  />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                  <Input
                    type="date"
                    name="dateOfBirth"
                    placeholder="Enter your Date of birth (dd/mm/yyyy)"
                    value={values.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                  {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>}
                  <select
                    name="nationality"
                    className="w-full p-3 bg-gray-100 rounded-lg"
                    value={values.nationality}
                    onChange={handleChange}
                    required
                    aria-label="Select nationality"
                  >
                    <option value="">Enter your Nationality</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="IN">India</option>
                    <option value="JP">Japan</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="CN">China</option>
                    <option value="BR">Brazil</option>
                    <option value="ZA">South Africa</option>
                  </select>
                  {errors.nationality && <p className="text-red-500 text-sm">{errors.nationality}</p>}
                </div>
              </div>

              <div className="space-y-4">
                <p>Provide your business address</p>
                <Input placeholder="Address line 1" required />
                <Input placeholder="Address line 2" />
                <Input placeholder="Street" required />
                <Input placeholder="City/Town" required />
                <select className="w-full p-3 bg-gray-100 rounded-lg" required aria-label="Select state"> {/* Added accessible name */}
                  <option value="">State</option>
                  {/* Add states as needed */}
                </select>
                <select className="w-full p-3 bg-gray-100 rounded-lg" required aria-label="Select country"> {/* Added accessible name */}
                  <option value="">Country</option>
                  <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="IN">India</option>
                    <option value="JP">Japan</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="CN">China</option>
                    <option value="BR">Brazil</option>
                    <option value="ZA">South Africa</option>
                </select>
                <Input placeholder="Pin-code" required />
              </div>

              <div className="md:col-span-2 flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 accent-[#B71DDE]" required />
                  <span className="text-sm">
                    I have read and I agree to the{" "}
                    <button type="button" className="text-[#B71DDE] underline" onClick={() => alert('Terms and Conditions')}>
                      Terms and Conditions
                    </button>
                    , and the{" "}
                    <button type="button" className="text-[#B71DDE] underline" onClick={() => alert('Privacy Policy')}>
                      Privacy Policy
                    </button>
                  </span>
                </label>

                <Button type="submit" className="w-auto px-12">
                  <a href="/signup/business" className="text-[#B71DDE] font-medium hover:underline">
                  NEXT
                  </a>
                </Button>
              </div>
            </form>
          </div>
        </div>
    </ErrorBoundary>
  );
};

export default SignupBasicDetails;
