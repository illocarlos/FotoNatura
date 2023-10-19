import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../../services/auth.service";
import Loader from "../../Loader/Loader";

const FormSignUp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const [signupData, setSignupData] = useState({
        email: "",
        avatar: "",
        name: "",
        lastName: "",
        about: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setSignupData({
            ...signupData,
            [name]: value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        authService
            .signup(signupData)
            .then(() => {
                emitMessage("welcome");
                navigate("/");
            })
            .catch((err) => {
                setErrors(err.response.data.errorMessages);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className="flex items-center justify-center h-screen dark">
            <div className="w-full h-auto max-w-md  rounded-2xl shadow-2xl p-6">
                <h1 className="text-4xl font-bold TitleFN mb-4 text-center">Register</h1>

                <form className="flex flex-col"
                    onSubmit={handleFormSubmit}>
                    <input
                        placeholder="Name"
                        className="bg-white text-gray-200 border-0 rounded-md p-2 mb-4
                         focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 
                         transition ease-in-out duration-150"
                        type="text"
                        name="name"
                        value={signupData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        placeholder="LastName"
                        className="bg-white text-gray-200 border-0 rounded-md p-2 mb-4
                         focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500
                          transition ease-in-out duration-150"
                        type="text"
                        name="lastName"
                        value={signupData.lastName}
                        onChange={handleInputChange}
                    />
                    <input
                        placeholder="Email"
                        className="bg-white text-gray-200 border-0 rounded-md p-2 mb-4
                         focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 
                         transition ease-in-out duration-150"
                        type="email"
                        name="email"
                        value={signupData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        placeholder="Password"
                        className="bg-white text-gray-200 border-0 rounded-md p-2 mb-4
                         focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500
                          transition ease-in-out duration-150"
                        type="password"
                        name="password"
                        value={signupData.password}
                        onChange={handleInputChange}
                    />
                    <input

                        className="bg-white text-gray-200 border-0 rounded-md p-2 mb-4
                         focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 
                         transition ease-in-out duration-150"
                        type="file"
                        name="avatar"
                        value={signupData.avatar}
                        onChange={handleInputChange}
                        accept=".jpg, .jpeg, .png"
                        style={{ overflow: "hidden", direction: "rtl", cursor: "pointer" }}
                    />
                    <textarea
                        placeholder="About"
                        className="bg-white text-gray-200 border-0 rounded-md p-2 mb-4
                         focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 
                         transition ease-in-out duration-150"
                        name="about"
                        value={signupData.about}
                        onChange={handleInputChange}
                    />

                    <button
                        className="cursor-pointer transition-all w-full
                         bg-gray-700 text-white px-6 py-2 rounded-lg border-green-400
                          border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] 
                          hover:border-b-[6px] active:border-b-[2px] active:brightness-90 
                          active:translate-y-[2px] hover:shadow-xl
                           hover:shadow-green-300 shadow-green-300 active:shadow-none"
                        type="submit"
                    >
                        Register
                    </button>
                </form>
                {isLoading && <Loader />}
                {errors && (
                    <p className="mt-4 text-lg text-center bg-red-100 text-black">
                        {errors}
                    </p>
                )}
            </div>
        </div>
    );
};

export default FormSignUp;
