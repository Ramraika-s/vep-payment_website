import { useState, useCallback } from "react"

type ValidationRule = (value: string) => string | null

export const useFormValidation = (
  initialState: { [key: string]: string },
  validationRules: { [key: string]: ValidationRule },
) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
      const { name, value } = e.target
      setValues((prevValues) => ({ ...prevValues, [name]: value }))
      if (errors[name]) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }))
      }
    },
    [errors],
  )

  const validateField = useCallback(
    (name: string, value: string) => {
      if (validationRules[name]) {
        const error = validationRules[name](value)
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error || "" }))
        return !error
      }
      return true
    },
    [validationRules],
  )

  const validateForm = useCallback(() => {
    let isValid = true
    Object.keys(values).forEach((key) => {
      if (!validateField(key, values[key])) {
        isValid = false
      }
    })
    return isValid
  }, [validateField, values])

  return { values, errors, handleChange, validateField, validateForm }
}

