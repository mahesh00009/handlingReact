import { useState } from "react";
import { data } from "../Data/FormData";
import useFormValidation from "../Data/useFormValidation";

const Form = () => {
  const {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    resetForm,
    setFieldValue,
    setErrors,
  } = useFormValidation(data);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(() => {
      console.log("Form is valid! Submitting data:", formData);
      alert("Form submitted successfully! Check console for data.");
      resetForm();
    });
  };

  const handleAutofill = () => {
    setFieldValue("firstName", "Jane");
    setFieldValue("lastName", "Doe");
    setFieldValue("email", "jane.doe@example.com");
    setFieldValue("address", "456 Oak Avenue, Anytown, USA");
    setFieldValue("countryCode", "+1");
    setFieldValue("phoneNumber", "9876543210");
    setFieldValue("zipCode", "90210");
    setFieldValue("gender", "female");
  };

  const handleServerError = () => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: "This email is already registered.",
      phoneNumber: "Phone number already in use.",
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 font-inter">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl">
        <h1 className="text-center text-2xl font-bold mb-10">
          Citizen Registration Form
        </h1>
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                FirstName
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                className={`w-full px-4 py-2 border ${
                  touched.firstName && errors.firstName
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in shadow-sm`}
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.firstName && errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="middleName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Middle Name (optional)
              </label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                placeholder="Doe"
                className={`w-full px-4 py-2 border ${
                  touched.middleName && errors.middleName
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in shadow-sm`}
                value={formData.middleName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.middleName && errors.middleName && (
                <p className="text-red-500 text-xs mt-1">{errors.middleName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Smith"
                className={`w-full px-4 py-2 border ${
                  touched.lastName && errors.lastName
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in shadow-sm`}
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.lastName && errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              placeholder="123 Main St, City, town, Country"
              rows="3"
              className={`my-input-texts resize-y w-full px-4 py-2 border ${
                touched.address && errors.address
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in shadow-sm`}
              value={formData.address}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {touched.address && errors.address && (
              <p className="text-red-500 text-xs mt-1">{errors.address}</p>
            )}
          </div>

          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@example.com"
              className={`my-input-texts w-full px-4 py-2 border ${
                touched.email && errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in shadow-sm`}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 mt-6">
            <div>
              <label
                htmlFor="countryCode"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Country Code
              </label>
              <select
                id="countryCode"
                name="countryCode"
                className={`my-input-texts w-full px-4 py-2 border ${
                  touched.countryCode && errors.countryCode
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in shadow-sm`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.countryCode}
              >
                <option value="">Select Code</option>
                <option value="+1">+1 (USA / Canada)</option>
                <option value="+91">+91 (India)</option>
                <option value="+977">+977 (Nepal)</option>
                <option value="+44">+44 (United Kingdom)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+81">+81 (Japan)</option>
                <option value="+49">+49 (Germany)</option>
                <option value="+33">+33 (France)</option>
                <option value="+86">+86 (China)</option>
                <option value="+55">+55 (Brazil)</option>
                <option value="+27">+27 (South Africa)</option>
                <option value="+34">+34 (Spain)</option>
                <option value="+7">+7 (Russia)</option>
                <option value="+82">+82 (South Korea)</option>
                <option value="+39">+39 (Italy)</option>
                <option value="+234">+234 (Nigeria)</option>
                <option value="+62">+62 (Indonesia)</option>
                <option value="+63">+63 (Philippines)</option>
                <option value="+966">+966 (Saudi Arabia)</option>
                <option value="+90">+90 (Turkey)</option>
                <option value="+971">+971 (UAE)</option>
                <option value="+60">+60 (Malaysia)</option>
                <option value="+65">+65 (Singapore)</option>
                <option value="+351">+351 (Portugal)</option>
                <option value="+31">+31 (Netherlands)</option>
                <option value="+46">+46 (Sweden)</option>
                <option value="+41">+41 (Switzerland)</option>
                <option value="+48">+48 (Poland)</option>
                <option value="+420">+420 (Czech Republic)</option>
                <option value="+30">+30 (Greece)</option>
              </select>
              {touched.countryCode && errors.countryCode && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.countryCode}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="(123) 456-7890"
                className={`my-input-texts w-full px-4 py-2 border ${
                  touched.phoneNumber && errors.phoneNumber
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in shadow-sm`}
                value={formData.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                placeholder="12345"
                className={`my-input-texts w-full px-4 py-2 border ${
                  touched.zipCode && errors.zipCode
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in shadow-sm`}
                value={formData.zipCode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.zipCode && errors.zipCode && (
                <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Gender
            </label>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 rounded"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={formData.gender === "male"}
                />
                <label htmlFor="male" className="ml-2 text-sm text-gray-700">
                  Male
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 rounded"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={formData.gender === "female"}
                />
                <label htmlFor="female" className="ml-2 text-sm text-gray-700">
                  Female
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="others"
                  name="gender"
                  value="others"
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 rounded"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={formData.gender === "others"}
                />
                <label htmlFor="others" className="ml-2 text-sm text-gray-700">
                  Others
                </label>
              </div>
            </div>
            {touched.gender && errors.gender && (
              <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
            )}
          </div>

          <div className="grid grid-1 md:grid-cols-2 gap-6 mt-7">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={`my-input-texts w-full px-4 py-2 border ${
                  touched.password && errors.password
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in shadow-sm`}
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={`my-input-texts w-full px-4 py-2 border ${
                  touched.confirmPassword && errors.confirmPassword
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in shadow-sm`}
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>

          <div className="text-center mt-8 space-x-4">
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-full shadow-lg transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              disabled={!isValid}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="mt-4 md:mt-0 w-full md:w-auto bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-12 rounded-full shadow-lg transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Reset
            </button>
          </div>

          <div className="text-center mt-6 space-x-4">
            <button
              type="button"
              onClick={handleAutofill}
              className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full shadow-lg transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-sm"
            >
              Autofill Form
            </button>
            <button
              type="button"
              onClick={handleServerError}
              className="mt-4 md:mt-0 w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full shadow-lg transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-sm"
            >
              Simulate Server Error
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
