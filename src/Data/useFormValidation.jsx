import { useEffect, useState } from "react"

const useFormValidation = (data) => {

    cost [FormData, setFormData] = useState(data)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isValid, setIsValid] = useState(false)


    const handleChange = (e) => {
        const [name, value] = e.target

        setFormData((prev) => {
            return {...prev, [name] : value}
        })
    }

    const handleSubmit = async () => {

        setIsSubmitting(true);

        const validationErrors = validate(FormData)

        setErrors(validationErrors)

        if(Object.keys(validationErrors).length === 0)
        {
           await new Promise((resolve) => setTimeout(() => console.log("successfully Submitted"), 1000))
        }

        setIsSubmitting(false)

    }

    useEffect(() => {
        setIsValid(Object.keys(errors).length === 0)
    }, [errors, FormData])

    const validate = (values) => {

        const newErrors = {}

        if(!values.firstName.trim()){
            newErrors.firstName = "First Name is Required"
        } else if(values.firstName.length < 2){
            newErrors.firstName = "First Name should be at least 2 characters"
        }

        return newErrors

    }




  return (
    <div>useFormValidation</div>
  )
}

export default useFormValidation