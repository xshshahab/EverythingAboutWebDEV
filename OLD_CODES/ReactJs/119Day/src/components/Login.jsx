import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";

const Login = () => {
    const {
        register,
        handleSubmit,
        reset, // <-- Add this line to access the reset method
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
        try {
            // You might want to add a delay function here if required
            // await delay(2)

            let response = await fetch('http://localhost:3000/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',  // Ensure content-type is set to JSON
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                // If the response is not OK, throw an error
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            let res = await response.json();
            console.log(data, res);

            // Reset the form fields after submission
            reset(); // <-- Add this line to reset the form fields

        } catch (error) {
            // Error handling in case the fetch fails
            console.error('There was an error with the fetch operation:', error);
        }
    }

    return (
        <div className="flex justify-center items-center m-5 rounded-lg min-h-[94vh] bg-zinc-950">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-neutral-700 shadow-lg rounded-lg p-8 w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-gray-200 text-center">
                    Login Form
                </h2>

                {/* Username Field */}
                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="block text-zinc-200 font-medium mb-2"
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
                        <p className="text-red-300 text-sm mt-1">
                            {errors.username.message}
                        </p>
                    )}
                </div>

                {/* Password Field */}
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-zinc-200 font-medium mb-2"
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
                        <p className="text-red-300 text-sm mt-1">
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

export default Login;
