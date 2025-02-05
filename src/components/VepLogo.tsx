import React from "react"

interface VepLogoProps {
  showBack?: boolean
  onBack?: () => void
}

const VepLogo: React.FC<VepLogoProps> = ({ showBack = false, onBack }) => {
  return (
    <div className="flex items-center gap-4">
      {showBack && (
        <button onClick={onBack} className="text-gray-600 hover:text-gray-900" aria-label="Go back">
          ←
        </button>
      )}
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-[#B71DDE] rounded flex items-center justify-center text-white font-bold">V</div>
        <div>
        <img
        src="../images/Logo.svg"
        alt="Login illustration"
        className="w-full max-w-md"
         />
        </div>
      </div>
    </div>
  )
}

export default React.memo(VepLogo)

