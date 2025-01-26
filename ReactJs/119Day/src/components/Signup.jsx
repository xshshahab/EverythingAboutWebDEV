import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();


    const delay = (d) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(d);
            }, d * 1000);
        })
    }


    const onSubmit = async (data) => {
        await delay(2)
        console.log(data);
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    Sign Up Form
                </h2>

                {/* Username Field */}
                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        {...register("username", {
                            required: "Username is required",
                            minLength: {
                                value: 3,
                                message: "Username must be at least 3 characters",
                            },
                            maxLength: {
                                value: 8,
                                message: "Username cannot exceed 8 characters",
                            },
                        })}
                        className={`w-full px-4 py-2 border ${errors.username ? "border-red-500" : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                    />
                    {errors.username && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.username.message}
                        </p>
                    )}
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email address",
                            },
                        })}
                        className={`w-full px-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Password Field */}
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        {...register("password", { required: "Password is required" })}
                        className={`w-full px-4 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                {
                    isSubmitting ? <Button /> :

                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Submit
                        </button>
                }
            </form>
        </div>
    );
};

export default Signup;
