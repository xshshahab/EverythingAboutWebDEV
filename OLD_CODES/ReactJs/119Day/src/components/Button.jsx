import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const Button = () => {
    return (
        <>
            <style>
                {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
            </style>


            <button className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-md bg-zinc-100 hover:bg-zinc-300">
                <BiLoaderCircle
                    className="animate-spin "
                    color="#000"
                    size={20}
                    style={{
                        animation: "spin 2s linear infinite",
                    }}
                />
                <span className="font-semibold text-zinc-900">Submitting...</span>
            </button>
        </>
    );
};

export default Button;
