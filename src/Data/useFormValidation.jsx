import { useState, useEffect, useCallback } from "react";

const useFormValidation = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const validate = useCallback((values) => {
    const newErrors = {};

    if (!values.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    } else if (values.firstName.trim().length < 2) {
      newErrors.firstName = "First Name must be at least 2 characters";
    }

    if (!values.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    } else if (values.lastName.trim().length < 2) {
      newErrors.lastName = "Last Name must be at least 2 characters";
    }

    if (!values.address.trim()) {
      newErrors.address = "Address is required";
    } else if (values.address.trim().length < 10) {
      newErrors.address = "Address must be at least 10 characters";
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!values.countryCode) {
        newErrors.countryCode = "Country Code is required";
    }

    if (!values.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{7,15}$/.test(values.phoneNumber.trim())) {
      newErrors.phoneNumber = "Phone Number must be 7-15 digits";
    }

    if (!values.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!values.password) {
      newErrors.password = "Password is required";
    } else if (values.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!values.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (values.confirmPassword !== values.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!values.zipCode.trim()) {
        newErrors.zipCode = "Zip Code is required";
    } else if (!/^\d{5}(-\d{4})?$/.test(values.zipCode.trim())) {
        newErrors.zipCode = "Invalid Zip Code format";
    }

    return newErrors;
  }, []);

  useEffect(() => {
    setErrors(validate(formData));
  }, [formData, validate]);

  useEffect(() => {
    setIsValid(Object.keys(errors).length === 0);
  }, [errors]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prev) => {
      if (type === "radio") {
        return { ...prev, [name]: value };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (callback) => {
    setIsSubmitting(true);
    const allFieldsTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allFieldsTouched);

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setTimeout(() => {
        callback();
        setIsSubmitting(false);
      }, 500);
    } else {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
    setIsValid(false);
    console.log("Form reset. New formData:", initialState); // Added for debugging
  };

  const setFieldValue = (fieldName, value) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
  };

  const setErrorsManually = (newErrors) => {
    setErrors(newErrors);
    const touchedFields = Object.keys(newErrors).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(prev => ({ ...prev, ...touchedFields }));
  };

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting,
    resetForm,
    setFieldValue,
    setErrors: setErrorsManually,
  };
};

export default useFormValidation;
