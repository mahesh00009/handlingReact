import { useState } from "react";
import { data } from "../Data/FormData";
import useFormValidation from "../Data/useFormValidation";

const Form = () => {
  // const [formData, setFormData] = useState(data);
  // const handleChange = (e) => {

  //   const {name, value} = e.target;

  //   if(name === countryCode){
  //     setFormData({...formData, })
  //   }
  //   setFormData({...formData, [name]: value})
  
  // }

  const {handleChange, formData, errors,handleSubmit, isValid} = useFormValidation(data)

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // }


  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl">
        <h1 className="text-center text-2xl font-bold mb-10">
          Citizen Registration Form
        </h1>
        <form>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus-ring-blue-500 focus:border-transparent transition duration-200 ease-in shadow-sm"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Middle Name(optional)
              </label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                placeholder="Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus-ring-blue-500 focus:border-transparent transition duration-200 ease-in shadow-sm"
                value={formData.middleName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Smith"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus-ring-blue-500 focus:border-transparent transition duration-200 ease-in shadow-sm"
                                value={formData.lastName}

                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address
            </label>

            <input
              type="text"
              id="address"
              name="address"
              placeholder="123 Main St, City, town, Country"
              rows="3"
              className="my-input-texts resize-y"
                              value={formData.address}

              onChange={handleChange}
            />
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
              className="my-input-texts"
              value={formData.email}

              onChange={handleChange}
            />
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
                className="my-input-texts "
                onChange={handleChange}
                                value={formData.countryCode}

              >
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
                <option value="+351">+351 (Portugal)</option>

                <option value="+30">+30 (Greece)</option>
              </select>
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
                className="my-input-texts"
                onChange={handleChange}
              />
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
                className="my-input-texts"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="Gender"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Gender
            </label>

            <div className="flex flex-wrap gap-4" onChange={handleChange}
>
              <div className="flex items-center "  >
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 rounded"
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
                />

                <label htmlFor="others" className="ml-2 text-sm text-gray-700">
                  Others
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-1 md:grid-cols-2 gap-6 mt-7">
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {" "}
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="my-input-texts"
                onChange={handleChange}
              />
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
                className="my-input-texts"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mt-6 w-full md:w-auto  bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-full shadow-lg transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
